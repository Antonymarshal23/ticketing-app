import { Publisher, Subjects, CustomerUpdatedEvent } from "@antonymarshal23/common";

export class CustomerUpdatedPublisher extends Publisher<CustomerUpdatedEvent> {
  readonly subject = Subjects.CustomerUpdated;
}
