
import { useEffect, useState } from 'react';
import axios from 'axios';
import Router from 'next/router';

const TicketsPage = ({ currentUser }) => {
  const [tickets, setTickets] = useState([]);
  const [ticketsCount, setTicketsCount] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const limit = 10;

  // Get offset from URL
  const getOffsetFromUrl = () => {
    const offset = parseInt(Router.router?.query?.offset, 10);

    return Number.isNaN(offset) ? 0 : offset;
  };

  const fetchTickets = async (currentOffset = 0) => {
    try {
      setLoading(true);

      const response = await axios.get(
        `/api/tickets?offset=${currentOffset}&limit=${limit}`
      );

      const countResponse = await axios.get('/api/tickets');

      setTickets(response.data?.data || []);
      setTicketsCount(countResponse.data?.data || []);
    } catch (err) {
      console.error(err);
      setError('Unable to load tickets');
    } finally {
      setLoading(false);
    }
  };

  // Load page based on URL
  useEffect(() => {
    if (!Router.router.isReady) return;

    const currentOffset = getOffsetFromUrl();

    fetchTickets(currentOffset);
  }, [Router.router?.isReady, Router.router?.query?.offset]);

  // Change pagination and URL
  const changePage = (newOffset) => {
    Router.push(
      {
        pathname: '/tickets',
        query: {
          offset: newOffset,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  };

  if (loading) {
    return (
      <div className="container mt-5">
        <h2>Loading tickets...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <h2>{error}</h2>
      </div>
    );
  }

  const currentOffset = getOffsetFromUrl();

  return (
    <div className="container mt-5">

      <div className="d-flex align-items-center justify-content-between mb-4">
        <h1 className="mb-0">
          Available Tickets ({ticketsCount.length})
        </h1>

        {currentUser && currentUser.type === 'company' && (
          <button
            className="btn btn-success"
            onClick={() => Router.push('/tickets/new')}
          >
            Create Ticket
          </button>
        )}
      </div>

      <div className="row">
        {tickets.map((ticket) => (
          <div className="col-md-4 mb-4" key={ticket.id}>
            <div className="card">
              <div className="card-body">

                <h4>{ticket.title}</h4>

                <p>
                  Price: ${ticket.price}
                </p>

                <p>
                  Available: {ticket.quantity}
                </p>

                {currentUser && currentUser.type === 'company' ? (
                  <button
                    className="btn btn-warning"
                    style={{ marginRight: '250px' }}
                    onClick={() =>
                      Router.push(`/tickets/${ticket.id}/edit`)
                    }
                  >
                    Edit
                  </button>
                ) : currentUser ? (
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      Router.push(`/customer/checkout/${ticket.id}`)
                    }
                  >
                    Purchase
                  </button>
                ) : null}

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-4 mb-5">

        <button
          className="btn btn-secondary"
          disabled={currentOffset === 0}
          onClick={() =>
            changePage(Math.max(0, currentOffset - limit))
          }
        >
          Previous
        </button>

        <span>
          Showing items {currentOffset + 1} -{' '}
          {currentOffset + tickets.length}
        </span>

        <button
          className="btn btn-secondary"
          disabled={tickets.length < limit}
          onClick={() => changePage(currentOffset + limit)}
        >
          Next
        </button>

      </div>
    </div>
  );
};

export default TicketsPage;
