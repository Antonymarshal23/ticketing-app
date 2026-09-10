import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { User } from "../models/user";
import { Customer } from "../models/customer";
jest.setTimeout(30000);
declare global {
  var signin: (type: "company" | "customer") => Promise<string[]>;
}

jest.mock("../nats-wrapper");

let mongo: any;
beforeAll(async () => {
  process.env.JWT_KEY = "my_super_secret";
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  mongo = await MongoMemoryServer.create();
  const mongoUri = await mongo.getUri();
  await mongoose.connect(mongoUri);
});

beforeEach(async () => {
  jest.clearAllMocks();
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  if (mongo) {
    await mongo.stop();
  }

  await mongoose.connection.close();
});

global.signin = async (type: "company" | "customer") => {
  const id = new mongoose.Types.ObjectId().toHexString();

  let user;
  if (type === "customer") {
    user = Customer.build({
      id,
      email: `test-${id}@test.com`,
    });
    await user.save();
  } else {
    user = User.build({
      id,
      email: `test-${id}@test.com`,
    });
    await user.save();
  }
  // build a jwt payload { id, email }
  const payload = {
    id: user.id,
    email: user.email,
    type: type,
  };

  // create teh JWT
  const token = jwt.sign(payload, process.env.JWT_KEY!);

  // Build session object { jst: MY_JWT }
  const session = { jwt: token };

  // Turn session into JSON
  const sessionJSON = JSON.stringify(session);

  // Take JSON and encode it as base64
  const base64 = Buffer.from(sessionJSON).toString("base64");

  // return a string tahts the cookie with the encoded data
  return [`session=${base64}`];
};
