import { Publisher, Subjects, TicketUpdatedEvent } from "@antonymarshal23/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
