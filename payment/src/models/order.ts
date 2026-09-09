import mongoose from 'mongoose';
import { OrderStatus } from '@antonymarshal23/common';

import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface OrderAttrs {
  _id: string;
  userId: string;
  status: OrderStatus;
  expiresAt: Date;
  ticket?: mongoose.Types.ObjectId;
  version: number;
}

interface OrderDoc extends mongoose.Document {
  _id: string;
  userId: string;
  status: OrderStatus;
  expiresAt: Date;
  ticket?: mongoose.Types.ObjectId;
  version: number;
}

interface OrderModel extends mongoose.Model<OrderDoc> {
  build(attrs: OrderAttrs): OrderDoc;
}

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true,
      enum: Object.values(OrderStatus),
      default: OrderStatus.Created
    },
    expiresAt: {
      type: mongoose.Schema.Types.Date
    },
    ticket: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ticket'
    }
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      }
    }
  }
);

orderSchema.set('versionKey', 'version');
orderSchema.plugin(updateIfCurrentPlugin);

orderSchema.statics.build = (attrs: OrderAttrs) => {
  return new Order(attrs);
};

const Order = mongoose.model<OrderDoc, OrderModel>('Order', orderSchema);

export { Order, OrderStatus };
