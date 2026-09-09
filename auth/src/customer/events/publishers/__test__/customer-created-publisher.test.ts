import { CustomerCreatedEvent, Subjects, TicketCreatedEvent } from '@antonymarshal23/common';

import { natsWrapper } from '../../../../nats-wrapper';
import { CustomerCreatedPublisher } from '../customer-created-publisher';

it('publishes an event', async () => {
  const publisher = new CustomerCreatedPublisher(natsWrapper.client);

  const data: CustomerCreatedEvent['data'] = {
    id: 'customer-id',
    email: 'test@test.com',
  };

  await publisher.publish(data);

  expect(natsWrapper.client.publish).toHaveBeenCalled();

  expect(natsWrapper.client.publish).toHaveBeenCalledWith(
    Subjects.CustomerCreated,
    JSON.stringify(data),
    expect.any(Function)
  );
});