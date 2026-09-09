import { Subjects, UserCreatedEvent } from '@antonymarshal23/common';

import { natsWrapper } from '../../../../nats-wrapper';
import { UserCreatedPublisher } from '../user-created-publisher';

it('publishes an event', async () => {
  const publisher = new UserCreatedPublisher(natsWrapper.client);

  const data: UserCreatedEvent['data'] = {
    id: 'user-id',
    email: 'test@test.com',
  };

  await publisher.publish(data);

  expect(natsWrapper.client.publish).toHaveBeenCalled();

  expect(natsWrapper.client.publish).toHaveBeenCalledWith(
    Subjects.UserCreated,
    JSON.stringify(data),
    expect.any(Function)
  );
});