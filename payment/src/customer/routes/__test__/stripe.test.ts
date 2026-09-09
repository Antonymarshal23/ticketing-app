import request from 'supertest';
import { app } from '../../../app';

describe("POST /api/customers/payments", () => {
  it("returns 400 if orderId is missing", async () => {
    const cookie = await global.signin('customer');

    await request(app)
      .post("/api/customers/payments")
      .set("Cookie", cookie)
      .send({
        amount: 500,
      })
      .expect(400);
  });

  it("returns 400 if amount is invalid", async () => {
    const cookie = await global.signin('customer');

    await request(app)
      .post("/api/customers/payments")
      .set("Cookie", cookie)
      .send({
        orderId: "order123",
        amount: 0,
      })
      .expect(400);
  });

  it("creates a Stripe checkout session", async () => {
    const cookie = await global.signin('customer');

    const response = await request(app)
      .post("/api/customers/payments")
      .set("Cookie", cookie)
      .send({
        orderId: "order123",
        amount: 500,
      })
      .expect(201);

    expect(response.body.id).toBe("cs_test_123");
    expect(response.body.url).toBe("https://checkout.stripe.com/test");
  });
});
