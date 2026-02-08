import React, { useState } from 'react';
import DisplayProducts from './displayProducts';

const Home = ({ products, onQuantityChange, onShowProduct, onAdd, onSubtract }) => {
  const [sortOption, setSortOption] = useState('normal');

  const getSortedProducts = () => {
    const productsCopy = [...products];
    switch (sortOption) {
      case 'lowest':
        return productsCopy.sort((a, b) => a.price - b.price);
      case 'highest':
        return productsCopy.sort((a, b) => b.price - a.price);
      case 'normal':
      default:
        return productsCopy.sort((a, b) => a.id - b.id);
    }
  };

  return (
    <div>
      <div className="container" style={{ maxWidth: '1200px', padding: '1.5rem 0' }}>
        <div className="d-flex justify-content-center align-items-center">
          <label htmlFor="sortSelect" style={{ marginRight: '0.5rem' }}>Sort Price By:</label>
          <select
            id="sortSelect"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            style={{ padding: '0.25rem 0.5rem' }}
          >
            <option value="normal">Normal</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
      </div>
      <DisplayProducts
        products={getSortedProducts()}
        onQuantityChange={onQuantityChange}
        onShowProduct={onShowProduct}
        onAdd={onAdd}
        onSubtract={onSubtract}
      />
    </div>
  );
};

export default Home;
