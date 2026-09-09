import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { body } from "express-validator";
import { BadRequestError, NotFoundError, requireAuth, validateRequest } from "@antonymarshal23/common";

import { Ticket } from "../../models/ticket";
import { Order, OrderStatus } from "../../models/order";
import { OrderCreatedPublisher } from "../../events/publishers/order-created-publisher";
import { natsWrapper } from "../../nats-wrapper";
import { Customer } from "../../models/customer";

const router = express.Router();

const EXPIRATION_WINDOW_SECONDS = 15 * 60;

router.post(
  "/api/customers/orders",
  requireAuth('customer', Customer),
  [
    body("ticketId")
      .not()
      .isEmpty()
      .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
      .withMessage("TicketId must be provided"),
    body("paymentMethod").not().isEmpty().withMessage("paymentMethod must be provided"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { ticketId, paymentMethod } = req.body;

    // Find the ticket
    const ticket = await Ticket.findOne({_id: ticketId });
    if (!ticket) {
      throw new NotFoundError();
    }

    // Make sure the ticket is not reserved
    const isReserved = await ticket.isReserved();
    if (isReserved) {
      throw new BadRequestError("Ticket is already reserved");
    }

    // Calculate the expiration date for the order
    const expiration = new Date();
    expiration.setSeconds(expiration.getSeconds() + EXPIRATION_WINDOW_SECONDS);

    // Build order, save and publish in events
    const order = Order.build({
      userId: req.currentUser!.id,
      status: OrderStatus.Created,
      expiresAt: expiration,
      paymentMethod,
      ticket,
    });
    await order.save();

    new OrderCreatedPublisher(natsWrapper.client).publish({
      id: order.id,
      version: order.version,
      status: order.status,
      userId: order.userId,
      expiresAt: order.expiresAt.toISOString(),
      ticket: {
        id: ticket.id,
        price: ticket.price,
      },
    });

    res.status(201).send({ status: 1, data: order });
  },
);

export { router as newCustomerOrderRouter };
