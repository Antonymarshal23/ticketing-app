import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { NotFoundError, errorHandler } from '@antonymarshal23/common';

import { createTicketRouter } from './company/routes/new';
import { showTicketRouter } from './company/routes/show';
import { indexTicketRouter } from './company/routes/index';
import { updateTicketRouter } from './company/routes/update';
import {indexTicketCustomerRouter} from './customer/routes/index';

const app = express();
app.set('trust proxy', true); // trust ingress nginx
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter);
app.use(updateTicketRouter);
app.use(indexTicketCustomerRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
