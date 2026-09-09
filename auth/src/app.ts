import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { NotFoundError, errorHandler } from '@antonymarshal23/common';

import { currentUserRouter } from './company/routes/current-user';
import { signinRouter } from './company/routes/signin';
import { signoutRouter } from './company/routes/signout';
import { signupCustomerRouter } from './customer/routes/signup';
import { signoutCustomerRouter } from './customer/routes/signout';
import { signinCustomerRouter } from './customer/routes/signin';
import { currentCustomerRouter } from './customer/routes/current-user';
import { signupRouter } from './company/routes/signup';

const app = express();
app.set('trust proxy', true); // trust ingress nginx
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.use(currentCustomerRouter);
app.use(signinCustomerRouter);
app.use(signoutCustomerRouter);
app.use(signupCustomerRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
