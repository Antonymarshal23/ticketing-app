import mongoose from 'mongoose';
import { PasswordManager } from '../services/password-manager';

// An interface that describes the properties
// that are required to create a new user
interface CustomerAttrs {
  email: string;
  password: string;
}

// An interface that describes the properties
// that a customer Model has
interface CustomerModel extends mongoose.Model<CustomerDoc> {
  build(attrs: CustomerAttrs): CustomerDoc;
}

// An interface that describes the properties
// that a customer model has
interface CustomerDoc extends mongoose.Document {
  email: string;
  password: string;
}

const customerSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret.password;
        delete ret.__v;
        delete ret._id;
      },
    },
  }
);

customerSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await PasswordManager.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

customerSchema.statics.build = (attrs: CustomerAttrs) => new Customer(attrs);

const Customer = mongoose.model<CustomerDoc, CustomerModel>('Customer', customerSchema);

export { Customer };
