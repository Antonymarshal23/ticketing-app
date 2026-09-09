import { requireAuth } from "@antonymarshal23/common";
import express, { Request, Response } from "express";

import { Order } from "../../models/order";
import { User } from "../../models/user";

const router = express.Router();

router.get("/api/orders", requireAuth("company", User), async (req: Request, res: Response) => {
  const orders = await Order.find({}).populate("ticket");

  res.send(orders);
});

export { router as indexOrderRouter };
