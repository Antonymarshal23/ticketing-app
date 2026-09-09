import request from 'supertest';

import { app } from '../../../app';

const createTicket = async () =>
  request(app).post('/api/tickets').set('Cookie', await global.signin('company')).send({
    title: 'Concert Name',
    price: 10
  });

it('should fetch all the tickets', async () => {
  await createTicket();
  await createTicket();
  await createTicket();

  const response = await request(app).get('/api/tickets').send().expect(200);

  expect(response.body.data.length).toEqual(3);
});
