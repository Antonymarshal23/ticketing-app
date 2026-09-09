import { Listener, Subjects, CustomerCreatedEvent } from "@antonymarshal23/common";

import { Message } from "node-nats-streaming";

import { Customer } from "../../models/customer";
import { queueGroupName } from "./queue-group-name";
export class CustomerCreatedListener extends Listener<CustomerCreatedEvent> {
  readonly subject = Subjects.CustomerCreated;

  queueGroupName = queueGroupName;

  async onMessage(data: CustomerCreatedEvent["data"], msg: Message) {
    console.log("CustomerCreated event received");

    console.log(data);

    const customer = Customer.build({
      id: data.id,
      email: data.email,
    });

    await customer.save();

    msg.ack();
  }
}
