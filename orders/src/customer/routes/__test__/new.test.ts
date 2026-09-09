import mongoose from 'mongoose';
import request from 'supertest';

import { app } from '../../../app';
import { Order, OrderStatus } from '../../../models/order';
import { Ticket } from '../../../models/ticket';
import { natsWrapper } from '../../../nats-wrapper';

it('returns error if ticket does not exist', async () => {
  const ticketId = new mongoose.Types.ObjectId();

  await request(app)
    .post('/api/customers/orders')
    .set('Cookie', await global.signin("customer"))
    .send({
      ticketId,
      paymentMethod: 'stripe'
    })
    .expect(404);
});

it('returns error if ticket is already reserved', async () => {
  const ticket = Ticket.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    title: 'concert',
    price: 20
  });
  await ticket.save();
  const order = Order.build({
    ticket,
    userId: 'some_random_user_id',
    status: OrderStatus.Created,
    expiresAt: new Date(),
    paymentMethod: 'stripe'
  });
  await order.save();

  await request(app)
    .post('/api/customers/orders')
    .set('Cookie', await global.signin("customer"))
    .send({ ticketId: ticket.id, paymentMethod: 'stripe' })
    .expect(400);
});

it('reserves a ticket', async () => {
  const ticket = Ticket.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    title: 'concert',
    price: 20
  });
  await ticket.save();

  await request(app)
    .post('/api/customers/orders')
    .set('Cookie', await global.signin("customer"))
    .send({ ticketId: ticket.id, paymentMethod: 'stripe' })
    .expect(201);
});

it('emits an order created event', async () => {
  const ticket = Ticket.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    title: 'concert',
    price: 20
  });
  await ticket.save();

  await request(app)
    .post('/api/customers/orders')
    .set('Cookie', await global.signin("customer"))
    .send({ ticketId: ticket.id, paymentMethod: 'stripe' })
    .expect(201);

  expect(natsWrapper.client.publish).toHaveBeenCalled();
});
