
import { useState } from 'react';
import Router from 'next/router';
import axios from 'axios';

const NewTicketPage = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const onSubmit = async (event) => {
    event.preventDefault();

    setErrors([]);
    setLoading(true);

    try {
      await axios.post('/api/tickets', {
        title,
        price: parseFloat(price)
      });

      // Ticket created successfully
      Router.push('/');

    } catch (err) {
      console.error(err);

      if (err.response && err.response.data) {
        setErrors(
          err.response.data.errors || [
            { message: 'Unable to create ticket' }
          ]
        );
      } else {
        setErrors([
          { message: 'Unable to create ticket' }
        ]);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <h1 className="mb-4">
            Create Ticket
          </h1>

          {errors.length > 0 && (
            <div className="alert alert-danger">
              <ul className="mb-0">
                {errors.map((error, index) => (
                  <li key={index}>
                    {error.message}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <form onSubmit={onSubmit}>

            {/* Title */}
            <div className="form-group mb-3">

              <label>
                Title
              </label>

              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter ticket title"
              />

            </div>

            {/* Price */}
            <div className="form-group mb-3">

              <label>
                Price
              </label>

              <input
                type="number"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter ticket price"
                min="0"
                step="0.01"
              />

            </div>

            <div className="d-flex gap-2">

              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? 'Creating...' : 'Create Ticket'}
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => Router.push('/')}
              >
                Cancel
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
};

export default NewTicketPage;