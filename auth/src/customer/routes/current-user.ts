import express from "express";

import { requireAuth } from "@antonymarshal23/common";
import { Customer } from "../../models/customer";

const router = express.Router();

router.get("/api/customers/currentcustomer", requireAuth("customer", Customer), (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentCustomerRouter };
