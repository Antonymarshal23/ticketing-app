import { UserCreatedEvent } from '@antonymarshal23/common';
import { Message } from 'node-nats-streaming';

import { User } from '../../../models/user';
import { natsWrapper } from '../../../nats-wrapper';
import { UserCreatedListener } from '../user-created-listener';

const setup = async () => {
  // create listener
  const listener = new UserCreatedListener(natsWrapper.client);

  // create fake event data
  const data: UserCreatedEvent['data'] = {
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

it('creates and saves a user', async () => {
  const { listener, data, msg } = await setup();

  await listener.onMessage(data, msg);

  const user = await User.findById(data.id);

  expect(user).toBeDefined();
  expect(user!.email).toEqual(data.email);
});

it('acknowledges the message', async () => {
  const { listener, data, msg } = await setup();

  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();
});