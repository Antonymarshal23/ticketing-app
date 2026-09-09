import request from 'supertest';
import mongoose from 'mongoose';

import { app } from '../../../app';
import { Ticket } from '../../../models/ticket';

const buildTicket = async () => {
  const ticket = Ticket.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    title: 'Concert',
    price: 20
  });
  await ticket.save();

  return ticket;
};

it('fetches order for an particular ticket', async () => {
  const ticketOne = await buildTicket();
  const ticketTwo = await buildTicket();
  const ticketThree = await buildTicket();

  const userOne = await global.signin('customer');
  const userTwo = await global.signin('customer');

  await request(app)
    .post('/api/customers/orders')
    .set('Cookie', userOne)
    .send({ ticketId: ticketOne.id, paymentMethod: 'stripe' })
    .expect(201);

  const { body: orderOne } = await request(app)
    .post('/api/customers/orders')
    .set('Cookie', userTwo)
    .send({ ticketId: ticketTwo.id, paymentMethod: 'stripe' })
    .expect(201);

  const { body: orderTwo } = await request(app)
    .post('/api/customers/orders')
    .set('Cookie', userTwo)
    .send({ ticketId: ticketThree.id, paymentMethod: 'stripe' })
    .expect(201);

  const response = await request(app)
    .get('/api/customers/orders')
    .set('Cookie', userTwo)
    .expect(200);

  expect(response.body.length).toEqual(2);
  expect(response.body[0].id).toEqual(orderOne.data.id);
  expect(response.body[1].id).toEqual(orderTwo.data.id);
  expect(response.body[0].ticket.id).toEqual(ticketTwo.id);
  expect(response.body[1].ticket.id).toEqual(ticketThree.id);
});
