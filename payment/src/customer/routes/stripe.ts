import express, { Request, Response } from "express";

import Stripe from "stripe";

import { requireAuth } from "@antonymarshal23/common";
import { Customer } from "../../models/customer";
const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_KEY!);
import { Payment } from "../../models/payment";
import { natsWrapper } from "../../nats-wrapper";

router.post("/api/customers/payments", requireAuth("customer", Customer), async (req: Request, res: Response) => {
  const { orderId, amount } = req.body;
  if (!orderId) {
    return res.status(400).send({
      errors: [
        {
          message: "Order ID is required",
        },
      ],
    });
  }

  if (!amount || amount <= 0) {
    return res.status(400).send({
      errors: [
        {
          message: "Amount must be greater than zero.",
        },
      ],
    });
  }

  /**
   * Stripe uses the smallest currency unit.
   *
   * Example:
   *
   * ₹500 -> 50000 paise
   * $50  -> 5000 cents
   *
   * IMPORTANT:
   * Make sure your Orders Service sends
   * the amount in the correct unit.
   */

  const payment = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],

    line_items: [
      {
        price_data: {
          currency: "inr",

          product_data: {
            name: `Ticket Order ${orderId}`,
          },

          unit_amount: amount * 100,
        },

        quantity: 1,
      },
    ],

    mode: "payment",

    success_url: process.env.STRIPE_SUCCESS_URL,

    cancel_url: process.env.STRIPE_CANCEL_URL,

    metadata: {
      orderId,
    },
  });
  res.status(201).send({
    id: payment.id,
    url: payment.url,
  });
});

router.post("/api/customers/payments/webhook", express.raw({ type: "application/json" }), async (req: Request, res: Response) => {
  const signature = req.headers["stripe-signature"];

  if (!signature) {
    return res.status(400).send({
      message: "Missing Stripe signature",
    });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(req.body, signature, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.log("Stripe webhook signature verification failed");

    return res.status(400).send({
      message: "Webhook Error",
    });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const orderId = session.metadata?.orderId;

    if (!orderId) {
      return res.status(400).send({
        message: "Order ID missing",
      });
    }

    if (!session.payment_intent) {
      return res.status(400).send({
        message: "Payment intent missing",
      });
    }

    const existingPayment = await Payment.findOne({
      stripeId: session.payment_intent.toString(),
    });

    if (existingPayment) {
      return res.status(200).send({
        received: true,
      });
    }

    const payment = Payment.build({
      orderId,

      stripeId: session.payment_intent.toString(),

      amount: session.amount_total || 0,
    });

    await payment.save();

    console.log("Payment created:", payment.id);
  }

  res.status(200).send({
    received: true,
  });
});

export { router as newPaymentRouter };
