import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import { BadRequestError, validateRequest } from "@antonymarshal23/common";

import { Customer } from "../../models/customer";
import { CustomerCreatedPublisher } from "../events/publishers/customer-created-publisher";
import { natsWrapper } from "../../nats-wrapper";

const router = express.Router();

router.post(
  "/api/customers/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").trim().isLength({ min: 4, max: 20 }).withMessage("Password must be between 4 and 20 characters"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingCustomer = await Customer.findOne({ email });

    if (existingCustomer) {
      throw new BadRequestError("Email in use");
    }

    const customer = Customer.build({ email, password });
    await customer.save();

    await new CustomerCreatedPublisher(natsWrapper.client).publish({
      id: customer.id,
      email: customer.email,
    });

    // Generate JWT
    const customerJwt = jwt.sign(
      {
        id: customer.id,
        email: customer.email,
        type: "customer", // Add a type field to indicate the user type
      },
      process.env.JWT_KEY!,
    );

    // Store it on session object
    req.session = {
      jwt: customerJwt,
    };

    res.status(201).send({ status: 1, data: { email: customer.email, id: customer.id } });
  },
);

export { router as signupCustomerRouter };
