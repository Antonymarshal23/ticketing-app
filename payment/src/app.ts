import express from "express";
import "express-async-errors";
import cookieSession from "cookie-session";

import {
  NotFoundError,
  errorHandler,
} from "@antonymarshal23/common";

import { newPaymentRouter } from "./customer/routes/stripe";

const app = express();

app.set("trust proxy", true);

// Stripe webhook MUST receive raw body
app.use(
  "/api/customers/payments/webhook",
  express.raw({ type: "application/json" })
);

// Normal API requests
app.use(express.json());

app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

app.use(newPaymentRouter);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };