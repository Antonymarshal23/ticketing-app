import { Publisher, Subjects, UserUpdatedEvent } from "@antonymarshal23/common";

export class UserUpdatedPublisher extends Publisher<UserUpdatedEvent> {
  readonly subject = Subjects.UserUpdated;
}
