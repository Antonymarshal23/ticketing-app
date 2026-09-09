import { Subjects, TicketUpdatedEvent, UserUpdatedEvent } from "@antonymarshal23/common";

import { natsWrapper } from "../../../../nats-wrapper";
import { UserUpdatedPublisher } from "../user-updated-publisher";

it("has the correct subject", () => {
  const publisher = new UserUpdatedPublisher(natsWrapper.client);

  expect(publisher.subject).toEqual(Subjects.UserUpdated);
});

it("publishes an event", async () => {
  const publisher = new UserUpdatedPublisher(natsWrapper.client);

  const data: UserUpdatedEvent["data"] = {
    id: "user-id",
    email: "test@test.com",
  };

  await publisher.publish(data);

  expect(natsWrapper.client.publish).toHaveBeenCalledWith(Subjects.UserUpdated, JSON.stringify(data), expect.any(Function));
});
