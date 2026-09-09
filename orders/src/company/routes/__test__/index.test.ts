import request from "supertest";
import { app } from "../../../app";
import { Ticket } from "../../../models/ticket";

it("should fetch all the tickets", async () => {
  await Ticket.create({
    title: "Concert 1",
    price: 10,
    userId: "user1",
  });

  await Ticket.create({
    title: "Concert 2",
    price: 20,
    userId: "user2",
  });

  await Ticket.create({
    title: "Concert 3",
    price: 30,
    userId: "user3",
  });

  await request(app).get("/api/orders").set('Cookie', await global.signin("company")).expect(200);

});
