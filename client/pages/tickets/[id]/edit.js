
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const EditTicketPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState([]);

  // Get existing ticket
  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchTicket = async () => {
      try {
        const response = await axios.get(`/api/tickets/${id}`);

        const ticket = response.data;

        setTitle(ticket.title);
        setPrice(ticket.price);
      } catch (err) {
        console.error(err);

        setErrors([
          {
            message: 'Unable to load ticket'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchTicket();
  }, [id]);

  const onSubmit = async (event) => {
    event.preventDefault();

    setErrors([]);
    setSaving(true);

    try {
      await axios.put(`/api/tickets/${id}`, {
        title,
        price: parseFloat(price)
      });

      // Go back to ticket list
      router.push('/');
    } catch (err) {
      console.error(err);

      if (err.response && err.response.data) {
        setErrors(
          err.response.data.errors || [
            {
              message: 'Unable to update ticket'
            }
          ]
        );
      } else {
        setErrors([
          {
            message: 'Unable to update ticket'
          }
        ]);
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="container mt-5">
        <h2>Loading ticket...</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <h1 className="mb-4">
            Edit Ticket
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
                min="0"
                step="0.01"
              />

            </div>

            <button
              type="submit"
              className="btn btn-primary mr-2"
              disabled={saving}
            >
              {saving ? 'Updating...' : 'Update'}
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => router.push('/')}
            >
              Cancel
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default EditTicketPage;
