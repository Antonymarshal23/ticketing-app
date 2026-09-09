import { Publisher, Subjects, CustomerCreatedEvent } from "@antonymarshal23/common";

export class CustomerCreatedPublisher extends Publisher<CustomerCreatedEvent> {
  readonly subject = Subjects.CustomerCreated;
}
