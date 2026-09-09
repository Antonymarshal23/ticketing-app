import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { NotFoundError, errorHandler } from '@antonymarshal23/common';

import { indexOrderRouter } from './company/routes/index';
import { newCustomerOrderRouter } from './customer/routes/new';
import { showCustomerOrderRouter } from './customer/routes/show';
import { indexCustomerOrderRouter } from './customer/routes';

const app = express();
app.set('trust proxy', true); // trust ingress nginx
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

app.use(indexOrderRouter);

app.use(newCustomerOrderRouter);
app.use(showCustomerOrderRouter);
app.use(indexCustomerOrderRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
