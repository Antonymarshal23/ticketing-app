import { Subjects, TicketCreatedEvent } from '@antonymarshal23/common';

import { natsWrapper } from '../../../nats-wrapper';
import { TicketCreatedPublisher } from '../ticket-created-publisher';

it('publishes an event', async () => {
  const publisher = new TicketCreatedPublisher(natsWrapper.client);

  const data: TicketCreatedEvent['data'] = {
    id: 'ticket-id',
    title: 'concert',
    price: 99,
    userId: 'user-id',
    version: 0,
  };

  await publisher.publish(data);

  expect(natsWrapper.client.publish).toHaveBeenCalled();

  expect(natsWrapper.client.publish).toHaveBeenCalledWith(
    Subjects.TicketCreated,
    JSON.stringify(data),
    expect.any(Function)
  );
});