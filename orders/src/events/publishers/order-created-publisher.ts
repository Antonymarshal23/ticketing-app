import { OrderCreatedEvent, Publisher, Subjects } from '@antonymarshal23/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
