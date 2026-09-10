import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';
import { validateRequest, BadRequestError } from '@antonymarshal23/common';

import { Customer } from '../../models/customer';
import { PasswordManager } from '../../services/password-manager';

const router = express.Router();

router.post(
  '/api/customers/signin',
  [
    body('email').isEmail().withMessage('Email must be valid.'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('You must supply a password.'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingCustomer = await Customer.findOne({ email });
    if (!existingCustomer) {
      throw new BadRequestError('Invalid credentials');
    }

    const passwordMatch = await PasswordManager.compare(
      existingCustomer.password,
      password
    );
    if (!passwordMatch) {
      throw new BadRequestError('Invalid credentials');
    }

    // Generate JWT
    const customerJwt = jwt.sign(
      {
        id: existingCustomer.id,
        email: existingCustomer.email,
        type: 'customer'
      },
      process.env.JWT_KEY!
    );

    // Store it on session object
    req.session = {
      jwt: customerJwt,
    };

    res.status(200).send(existingCustomer);
  }
);

export { router as signinCustomerRouter };
