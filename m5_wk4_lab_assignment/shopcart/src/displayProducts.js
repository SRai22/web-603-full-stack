import React from 'react';

const productRowStyle = {
  borderBottom: '1px solid #dee2e6',
  padding: '2rem 0',
  backgroundColor: '#fff'
};

const lastProductRowStyle = {
  padding: '2rem 0',
  backgroundColor: '#fff'
};

const inputStyle = {
  width: '80px',
  height: '45px',
  textAlign: 'center',
  fontSize: '1rem'
};

const DisplayProducts = ({ products, onQuantityChange, onShowProduct, onAdd, onSubtract }) => {
  return (
    <main className="container" style={{ maxWidth: '1200px' }}>
      {products.map((product, index) => (
        <div
          key={product.id}
          style={index < products.length - 1 ? productRowStyle : lastProductRowStyle}
        >
          <h5 style={{ fontSize: '1.5rem', fontWeight: 'normal', margin: '0 0 1rem 0' }}>
            {product.name} <span style={{ color: '#dc3545', marginLeft: '0.5rem' }}>${product.price}</span>
          </h5>
          <div className="row align-items-center">
            <div className="col-auto">
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '120px', height: '120px', objectFit: 'cover' }}
              />
            </div>

            <div className="col-auto d-flex align-items-center">
              <div className="input-group">
                <button type="button" className="btn btn-outline-secondary" onClick={() => onSubtract && onSubtract(product.id)}>-</button>
                <input
                  type="number"
                  className="form-control text-center"
                  style={inputStyle}
                  value={product.quantity}
                  min="0"
                  onChange={(e) => onQuantityChange(product.id, parseInt(e.target.value) || 0)}
                />
                <button type="button" className="btn btn-outline-secondary" onClick={() => onAdd && onAdd(product.id)}>+</button>
              </div>
              <span style={{ marginLeft: '1rem', fontSize: '1rem' }}>quantity</span>
              <button type="button" className="btn btn-outline-primary btn-sm" style={{ marginLeft: '1rem' }} onClick={() => onShowProduct && onShowProduct(product)}>
                View
              </button>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default DisplayProducts;
