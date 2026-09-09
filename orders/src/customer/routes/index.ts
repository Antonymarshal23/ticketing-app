import { requireAuth } from "@antonymarshal23/common";
import express, { Request, Response } from "express";

import { Order } from "../../models/order";
import { Customer } from "../../models/customer";

const router = express.Router();

router.get("/api/customers/orders", requireAuth('customer', Customer), async (req: Request, res: Response) => {
  const orders = await Order.find({
    userId: req.currentUser!.id,
  }).populate("ticket");

  res.send(orders);
});

export { router as indexCustomerOrderRouter };
