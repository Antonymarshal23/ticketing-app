import { OrderCreatedEvent, OrderStatus, Subjects } from '@antonymarshal23/common';

import { natsWrapper } from '../../../nats-wrapper';
import { OrderCreatedPublisher } from '../order-created-publisher';

it('publishes an event', async () => {
  const publisher = new OrderCreatedPublisher(natsWrapper.client);

  const data: OrderCreatedEvent['data'] = {
    id: 'order-id',
    version: 0,
    status: OrderStatus.Created,
    ticket: {
      id: 'ticket-id',
      title: 'concert',
      price: 99
    },
    userId: 'user-id',
    expiresAt: new Date().toISOString()
  };

  await publisher.publish(data);

  expect(natsWrapper.client.publish).toHaveBeenCalled();

  expect(natsWrapper.client.publish).toHaveBeenCalledWith(
    Subjects.OrderCreated,
    JSON.stringify(data),
    expect.any(Function)
  );
});