import { Subjects, TicketUpdatedEvent } from "@antonymarshal23/common";

import { natsWrapper } from "../../../nats-wrapper";
import { TicketUpdatedPublisher } from "../ticket-updated-publisher";

it("has the correct subject", () => {
  const publisher = new TicketUpdatedPublisher(natsWrapper.client);

  expect(publisher.subject).toEqual(Subjects.TicketUpdated);
});

it("publishes an event", async () => {
  const publisher = new TicketUpdatedPublisher(natsWrapper.client);

  const data: TicketUpdatedEvent["data"] = {
    id: "ticket-id",
    title: "updated concert",
    price: 199,
    userId: "user-id",
    version: 1,
  };

  await publisher.publish(data);

  expect(natsWrapper.client.publish).toHaveBeenCalledWith(Subjects.TicketUpdated, JSON.stringify(data), expect.any(Function));
});
