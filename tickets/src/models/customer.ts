import mongoose from "mongoose";
interface CustAttrs {
  id: string;
  email: string;
}

interface CustomerDoc extends mongoose.Document {
  email: string;
}

interface UserModel extends mongoose.Model<CustomerDoc> {
  build(attrs: CustAttrs): CustomerDoc;
}

const customerSchema = new mongoose.Schema({
  _id: String,
  email: {
    type: String,
    required: true,
  },
});

customerSchema.statics.build = (attrs: CustAttrs) => {
  return new Customer({
    _id: attrs.id,
    email: attrs.email,
  });
};

const Customer = mongoose.model<CustomerDoc, UserModel>("Customer", customerSchema);

export { Customer };
