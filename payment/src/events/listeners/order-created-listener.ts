import { Listener, Subjects, OrderCreatedEvent } from "@antonymarshal23/common";
import { Message } from "node-nats-streaming";
import mongoose from "mongoose";
import { queueGroupName } from "./queue-group-name";
import { Order } from "../../models/order";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent["data"], msg: Message) {
    // Check whether this order already exists
    const existingOrder = await Order.findById(data.id);

    if (existingOrder) {
      msg.ack();
      return;
    }

    const ticketBuild = Order.build({
      _id: data.id,
      version: data.version,
      status: data.status,
      userId: data.userId,
      expiresAt: new Date(data.expiresAt),
      ticket: new mongoose.Types.ObjectId(data?.ticket?.id),
    });

    await ticketBuild.save();

    msg.ack();
  }
}
