import { useState } from "react";
import Router from "next/router";
import buildClient from "../../../api/build-client";

const CheckoutPage = ({ ticket }) => {
    const [paymentMethod, setPaymentMethod] = useState("stripe");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        setLoading(true);
        setError("");

        try {
            const client = buildClient();
            const response = await client.post("/api/customers/orders", {
                ticketId: ticket.id,
                paymentMethod,
            });

            // Stripe
            if (
                paymentMethod === "stripe"
            ) {
                const responseCheckout = await client.post("/api/customers/payments", {
                orderId: response.data.data.id,
                amount: ticket.price, // Convert to cents
            });
                window.location.href = responseCheckout.data.url;
                return;
            }

            // COD
            Router.push("/customer/orders");
        } catch (err) {
            console.log(err);

            setError(
                err.response?.data?.errors?.[0]?.message ||
                "Something went wrong"
            );

            setLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Checkout</h1>

            <div className="row">
                {/* LEFT SIDE */}
                <div className="col-md-7">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="mb-0">Order Summary</h4>
                        </div>

                        <div className="card-body">
                            <h3>{ticket.title}</h3>

                            <p className="text-muted">
                                Ticket ID: {ticket.id}
                            </p>

                            <hr />

                            <div className="d-flex justify-content-between">
                                <span>Ticket Price</span>

                                <strong>
                                    ₹{ticket.price}
                                </strong>
                            </div>

                            <div className="d-flex justify-content-between mt-3">
                                <strong>Total</strong>

                                <strong>
                                    ₹{ticket.price}
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="mb-0">
                                Payment Method
                            </h4>
                        </div>

                        <div className="card-body">

                            {/* STRIPE */}
                            <div className="form-check mb-3">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="paymentMethod"
                                    id="stripe"
                                    value="stripe"
                                    checked={
                                        paymentMethod === "stripe"
                                    }
                                    onChange={() =>
                                        setPaymentMethod("stripe")
                                    }
                                />

                                <label
                                    className="form-check-label"
                                    htmlFor="stripe"
                                >
                                    <strong>Pay with Stripe</strong>

                                    <div className="text-muted">
                                        Secure online payment
                                    </div>
                                </label>
                            </div>

                            {/* COD */}
                            <div className="form-check mb-4">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="paymentMethod"
                                    id="cod"
                                    value="cod"
                                    checked={
                                        paymentMethod === "cod"
                                    }
                                    onChange={() =>
                                        setPaymentMethod("cod")
                                    }
                                />

                                <label
                                    className="form-check-label"
                                    htmlFor="cod"
                                >
                                    <strong>
                                        Cash on Delivery
                                    </strong>

                                    <div className="text-muted">
                                        Pay when your order is delivered
                                    </div>
                                </label>
                            </div>

                            {error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )}

                            <button
                                className="btn btn-primary btn-block"
                                onClick={handleSubmit}
                                disabled={loading}
                            >
                                {loading
                                    ? "Processing..."
                                    : paymentMethod === "stripe"
                                        ? "Pay with Stripe"
                                        : "Place Order"}
                            </button>

                            <button
                                className="btn btn-secondary btn-block mt-2"
                                onClick={() =>
                                    Router.back('/customer/tickets')
                                }
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

CheckoutPage.getInitialProps = async (
    context
) => {
    const { ticketId } = context.query;

    try {
        const client = buildClient(context);

        const response = await client.get(
            `/api/customers/tickets/${ticketId}`
        );
        return {
            ticket: response.data,
        };
    } catch (err) {
        return {
            ticket: null,
        };
    }
};

export default CheckoutPage;