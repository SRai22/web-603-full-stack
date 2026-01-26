import React from 'react';
import DisplayProducts from './displayProducts';

const Home = ({ products, onQuantityChange, onShowProduct, onAdd, onSubtract }) => {
  return (
    <div>
      <DisplayProducts
        products={products}
        onQuantityChange={onQuantityChange}
        onShowProduct={onShowProduct}
        onAdd={onAdd}
        onSubtract={onSubtract}
      />
    </div>
  );
};

export default Home;
