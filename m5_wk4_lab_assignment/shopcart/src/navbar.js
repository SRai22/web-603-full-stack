import React from 'react';
import { Link } from 'react-router-dom';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ cartItems }) => {
  const headerStyle = {
    backgroundColor: '#17a2b8',
    color: '#fff',
    padding: '1.5rem 0'
  };

  const circleStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60px',
    height: '60px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    color: '#17a2b8',
    fontWeight: 'bold',
    margin: '0 0.25rem',
    verticalAlign: 'middle'
  };

  return (
    <header style={headerStyle}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'normal', margin: 0, display: 'flex', alignItems: 'center' }}>
              <Link to="/" style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                Shop 2 <span style={circleStyle}>R</span>eact
              </Link>
            </h1>
          </div>
          <div className="col-auto">
            <Link to="/cart" style={{ fontSize: '1.1rem', color: '#fff', textDecoration: 'none' }}>
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
