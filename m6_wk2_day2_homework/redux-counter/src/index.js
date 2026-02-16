import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import Counter from './Counter';
import reportWebVitals from './reportWebVitals';

// Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// Reducer
const initialState = { count: 0 };

function counterReducer (state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { 
        count: state.count + 1 
      };
    case DECREMENT:
      return {
        count: state.count - 1
      };
    case RESET:
      return {
        count: 0
      };
    default:
      return state;
  }
};

// Store
const store = createStore(counterReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
