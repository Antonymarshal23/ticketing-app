import request from 'supertest';
import mongoose from 'mongoose';

import { app } from '../../../app';
import { Ticket } from '../../../models/ticket';

it('fetches the order', async () => {
  const ticket = Ticket.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    title: 'Concert',
    price: 20
  });
  await ticket.save();

  const user = await global.signin("customer");

  const { body: order } = await request(app)
    .post('/api/customers/orders')
    .set('Cookie', user)
    .send({
      ticketId: ticket.id,
      paymentMethod: 'stripe'
    })
    .expect(201);
  const { body: fetchedOrder } = await request(app)
    .get(`/api/customers/orders/${order.data.id}`)
    .set('Cookie', user)
    .send()
    .expect(200);

  expect(fetchedOrder.id).toEqual(order.data.id);
});

it('returns error if one user fetches another user ticket', async () => {
  const ticket = Ticket.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    title: 'Concert',
    price: 20
  });
  await ticket.save();

  const user = await global.signin("customer");

  const { body: order } = await request(app)
    .post('/api/customers/orders')
    .set('Cookie', user)
    .send({
      ticketId: ticket.id,
      paymentMethod: 'stripe'
    })
    .expect(201);

  await request(app)
    .get(`/api/customers/orders/${order.data.id}`)
    .set('Cookie', await global.signin("customer"))
    .send()
    .expect(401);
});
