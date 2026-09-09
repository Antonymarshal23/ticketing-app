import { CustomerCreatedEvent } from '@antonymarshal23/common';
import { Message } from 'node-nats-streaming';

import { Customer } from '../../../models/customer';
import { natsWrapper } from '../../../nats-wrapper';
import { CustomerCreatedListener } from '../customer-created-listener';

const setup = async () => {
  // create listener
  const listener = new CustomerCreatedListener(natsWrapper.client);

  // create fake event data
  const data: CustomerCreatedEvent['data'] = {
    id: new Date().toISOString(),
    email: 'test@test.com',
  };

  // create fake message
  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return {
    listener,
    data,
    msg,
  };
};

it('creates and saves a customer', async () => {
  const { listener, data, msg } = await setup();

  await listener.onMessage(data, msg);

  const customer = await Customer.findById(data.id);

  expect(customer).toBeDefined();
  expect(customer!.email).toEqual(data.email);
});

it('acknowledges the message', async () => {
  const { listener, data, msg } = await setup();

  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();
});