import mongoose from 'mongoose';
interface UserAttrs {
  id: string;
  email: string;
}

interface UserDoc extends mongoose.Document {
  email: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

const userSchema = new mongoose.Schema({
  _id: String,
  email: {
    type: String,
    required: true,
  },
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User({
    _id: attrs.id,
    email: attrs.email,
  });
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };