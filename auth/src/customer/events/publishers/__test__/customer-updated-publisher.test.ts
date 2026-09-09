import { Subjects, CustomerUpdatedEvent } from "@antonymarshal23/common";

import { natsWrapper } from "../../../../nats-wrapper";
import { CustomerUpdatedPublisher } from "../customer-updated-publisher";

it("has the correct subject", () => {
  const publisher = new CustomerUpdatedPublisher(natsWrapper.client);

  expect(publisher.subject).toEqual(Subjects.CustomerUpdated);
});

it("publishes an event", async () => {
  const publisher = new CustomerUpdatedPublisher(natsWrapper.client);

  const data: CustomerUpdatedEvent["data"] = {
    id: "ticket-id",
    email: "'test@test.com'",
  };

  await publisher.publish(data);

  expect(natsWrapper.client.publish).toHaveBeenCalledWith(Subjects.CustomerUpdated, JSON.stringify(data), expect.any(Function));
});
