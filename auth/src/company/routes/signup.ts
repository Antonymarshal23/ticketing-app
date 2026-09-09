import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import { BadRequestError, validateRequest } from "@antonymarshal23/common";

import { User } from "../../models/user";
import { UserCreatedPublisher } from "../events/publishers/user-created-publisher";
import { natsWrapper } from "../../nats-wrapper";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").trim().isLength({ min: 4, max: 20 }).withMessage("Password must be between 4 and 20 characters"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log("Signup request received with email:", email);
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError("Email in use");
    }

    const user = User.build({ email, password });
    await user.save();

    await new UserCreatedPublisher(natsWrapper.client).publish({
      id: user.id,
      email: user.email,
    });

    // Generate JWT
    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
        type: "company", // Add a type field to indicate the user type
      },
      process.env.JWT_KEY!,
    );

    // Store it on session object
    req.session = {
      jwt: userJwt,
    };

    res.status(201).send({ status: 1, data: { email: user.email, id: user.id } });
  },
);

export { router as signupRouter };
