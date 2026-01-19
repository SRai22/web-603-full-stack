import React from 'react';
import { Link } from 'react-router-dom';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ cartItems }) => {
  const headerStyle = {
    backgroundColor: '#17a2b8',
    color: '#000',
    padding: '1.5rem 0'
  };

  return (
    <header style={headerStyle}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'normal', margin: 0 }}>
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Shop to React</Link>
            </h1>
          </div>
          <div className="col-auto">
            <Link to="/cart" style={{ fontSize: '1.1rem', color: 'inherit', textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '0.5rem' }} />
              {cartItems} items
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
