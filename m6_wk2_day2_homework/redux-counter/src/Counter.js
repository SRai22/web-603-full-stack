import React from 'react';
import { connect } from 'react-redux';
import './App.css';

class Counter extends React.Component {
  increment = () => { 
    this.props.dispatch({ type: 'INCREMENT' });   
  };
  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  };
  reset = () => {
    this.props.dispatch({ type: 'RESET' });
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <span>{this.props.count}</span>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
          <button onClick={this.reset}>reset</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count
});


export default connect(mapStateToProps)(Counter);
