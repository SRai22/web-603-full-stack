import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ products }) => {
  const navigate = useNavigate();
  const items = products.filter((p) => p.quantity > 0);
  return (
    <div className="container" style={{ maxWidth: '800px', paddingTop: '2rem' }}>
      <h3>Your Cart</h3>
      {items.length === 0 ? (
        <div>
          <p>You have {items.length} items in your cart.</p>
          <button
            className="btn btn-primary"
            style={{
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              fontSize: '1.1rem',
              fontWeight: '500'
            }}
            onClick={() => navigate('/')}
          >
            Continue Shop
          </button>
        </div>
      ) : (
        <>
          <ul className="list-group">
            {items.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.name}</strong>
                  <div className="text-muted">Quantity: {item.quantity}</div>
                </div>
                <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
              </li>
            ))}
          </ul>
          <button
            className="btn btn-primary"
            style={{
              marginTop: '1.5rem',
              padding: '0.75rem 1.5rem',
              fontSize: '1.1rem',
              fontWeight: '500'
            }}
          >
            Check Out
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
