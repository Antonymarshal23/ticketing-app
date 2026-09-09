import { OrderCancelledEvent, Subjects } from "@antonymarshal23/common";

import { natsWrapper } from "../../../nats-wrapper";
import { OrderCancelledPublisher } from "../order-cancelled-publisher";

it("has the correct subject", () => {
  const publisher = new OrderCancelledPublisher(natsWrapper.client);

  expect(publisher.subject).toEqual(Subjects.OrderCancelled);
});

it("publishes an event", async () => {
  const publisher = new OrderCancelledPublisher(natsWrapper.client);

  const data: OrderCancelledEvent["data"] = {
    id: "order-id",
    version: 1,
    ticket: {
      id: "ticket-id",
    },
  };

  await publisher.publish(data);

  expect(natsWrapper.client.publish).toHaveBeenCalledWith(Subjects.OrderCancelled, JSON.stringify(data), expect.any(Function));
});
