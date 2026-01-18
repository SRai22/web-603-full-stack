import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: 0,
      products: [
        { id: 1, name: "Unisex Cologne", image: "products/cologne.jpg", quantity: 0 },
        { id: 2, name: "Apple iWatch", image: "products/iwatch.jpg", quantity: 0 },
        { id: 3, name: "Unique Mug", image: "products/mug.jpg", quantity: 0 },
        { id: 4, name: "Mens Wallet", image: "products/wallet.jpg", quantity: 0 },
      ],
    };
  }

  handleQuantityChange = (id, value) => {
    const updatedProducts = this.state.products.map((product) => {
      if (product.id === id) {
        product.quantity = value;
      }
      return product;
    });
    const totalItems = updatedProducts.reduce((sum, product) => sum + product.quantity, 0);
    this.setState({ products: updatedProducts, cartItems: totalItems });
  };

  render() {
    const headerStyle = {
      backgroundColor: '#17a2b8',
      color: '#000',
      padding: '1.5rem 0'
    };

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

    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
        <header style={headerStyle}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col">
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'normal', margin: 0 }}>Shop to React</h1>
              </div>
              <div className="col-auto">
                <span style={{ fontSize: '1.1rem' }}>
                  <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '0.5rem' }} />
                  {this.state.cartItems} items
                </span>
              </div>
            </div>
          </div>
        </header>
        
        <main className="container" style={{ maxWidth: '1200px' }}>
          {this.state.products.map((product, index) => (
            <div
              key={product.id}
              style={index < this.state.products.length - 1 ? productRowStyle : lastProductRowStyle}
            >
              <h5 style={{ fontSize: '1.5rem', fontWeight: 'normal', margin: '0 0 1rem 0' }}>{product.name}</h5>
              <div className="row align-items-center">
                <div className="col-auto">
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                  />
                </div>
                
                <div className="col-auto d-flex align-items-center">
                  <input
                    type="number"
                    className="form-control"
                    style={inputStyle}
                    value={product.quantity}
                    min="0"
                    onChange={(e) =>
                      this.handleQuantityChange(product.id, parseInt(e.target.value) || 0)
                    }
                  />
                  <span style={{ marginLeft: '1rem', fontSize: '1rem' }}>quantity</span>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    );
  }
}

export default App;
