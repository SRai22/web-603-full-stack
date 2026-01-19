import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import productsData from './products';
import Navbar from './navbar';
import Home from './Home';
import Cart from './Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: 0,
      products: productsData,
      showModal: false,
      activeProduct: null,
    };
  }

  addQuantity = (id) => {
    this.setState((prevState) => {
      const products = prevState.products.map((p) => {
        if (p.id === id) {
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      });
      const cartItems = products.reduce((sum, prod) => sum + prod.quantity, 0);
      return { products, cartItems };
    });
  };

  subtractQuantity = (id) => {
    this.setState((prevState) => {
      const products = prevState.products.map((p) => {
        if (p.id === id) {
          return { ...p, quantity: Math.max(0, p.quantity - 1) };
        }
        return p;
      });
      const cartItems = products.reduce((sum, prod) => sum + prod.quantity, 0);
      return { products, cartItems };
    });
  };

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

  openProductModal = (product) => {
    this.setState({ showModal: true, activeProduct: product });
  };

  closeProductModal = () => {
    this.setState({ showModal: false, activeProduct: null });
  };

  render() {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
        <Router>
          <Navbar cartItems={this.state.cartItems} />
          <Routes>
            <Route path="/" element={<Home
              products={this.state.products}
              onQuantityChange={this.handleQuantityChange}
              onShowProduct={this.openProductModal}
              onAdd={this.addQuantity}
              onSubtract={this.subtractQuantity}
            />} />
            <Route path="/cart" element={<Cart products={this.state.products} />} />
          </Routes>
        </Router>

        {this.state.showModal && this.state.activeProduct && (
          <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={this.closeProductModal}>
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{this.state.activeProduct.name}</h5>
                  <button type="button" className="btn-close" aria-label="Close" onClick={this.closeProductModal}></button>
                </div>
                <div className="modal-body">
                  <img src={this.state.activeProduct.image} alt={this.state.activeProduct.name} style={{ width: '100%', height: 'auto', marginBottom: '1rem' }} />
                  <p>{this.state.activeProduct.description}</p>
                  <p><strong>Ratings:</strong> {this.state.activeProduct.ratings}</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={this.closeProductModal}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
