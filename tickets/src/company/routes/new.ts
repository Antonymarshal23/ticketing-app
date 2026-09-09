import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@antonymarshal23/common';

import { TicketCreatedPublisher } from '../../events/publishers/ticket-created-publisher';
import { Ticket } from '../../models/ticket';
import { natsWrapper } from '../../nats-wrapper';
import { User } from '../../models/user';

const router = express.Router();

router.post(
  '/api/tickets',
  requireAuth("company", User),
  [
    body('title').not().isEmpty().withMessage('Title is required'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be greater than 0')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { title, price } = req.body;

    const ticket = Ticket.build({
      title,
      price,
      userId: req.currentUser!.id
    });

    await ticket.save();
    await new TicketCreatedPublisher(natsWrapper.client).publish({
      id: ticket.id,
      title: ticket.title,
      price: ticket.price,
      userId: ticket.userId,
      version: ticket.version
    });

    res.status(201).send({ status: 1, data: ticket });
  }
);

export { router as createTicketRouter };
