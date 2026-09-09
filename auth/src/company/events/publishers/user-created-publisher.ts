import { Publisher, Subjects, UserCreatedEvent } from "@antonymarshal23/common";

export class UserCreatedPublisher extends Publisher<UserCreatedEvent> {
  readonly subject = Subjects.UserCreated;
}
