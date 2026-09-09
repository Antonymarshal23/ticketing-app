import {
  NotAuthorizedError,
  NotFoundError,
  requireAuth
} from '@antonymarshal23/common';
import express, { Request, Response } from 'express';
import { Order } from '../../models/order';
import { Customer } from '../../models/customer';

const router = express.Router();

router.get(
  '/api/customers/orders/:orderId',
  requireAuth('customer', Customer),
  async (req: Request, res: Response) => {
    const order = await Order.findById(req.params.orderId).populate('ticket');

    if (!order) {
      throw new NotFoundError();
    }

    if (order.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    res.send(order);
  }
);

export { router as showCustomerOrderRouter };
