import { OrderCancelledEvent, Publisher, Subjects } from '@antonymarshal23/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
