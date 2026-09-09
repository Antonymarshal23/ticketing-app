import { useEffect, useState } from 'react';
import axios from 'axios';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('/api/customers/orders');

      setOrders(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="container mt-5">
        <h2>Loading orders...</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">My Orders</h1>

      {orders.length === 0 && (
        <p>No orders found.</p>
      )}

      <div className="row">
        {orders.map((order) => (
          <div className="col-md-6 mb-4" key={order.id}>
            <div className="card">
              <div className="card-body">
                <p>
                  User ID: {order.userId}
                </p>
                <p>
                  Order ID: {order.id}
                </p>

                <p>
                  Status: {order.status}
                </p>

                <p>
                  Ticket ID: {order.ticketId}
                </p>

                <p>
                  Price: ${order.ticket?.price || order.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;