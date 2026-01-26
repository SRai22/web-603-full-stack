import React from 'react';

const Cart = ({ products }) => {
  const items = products.filter((p) => p.quantity > 0);
  return (
    <div className="container" style={{ maxWidth: '800px', paddingTop: '2rem' }}>
      <h3>Your Cart</h3>
      {items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
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
      )}
    </div>
  );
};

export default Cart;
