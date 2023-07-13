import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'
import useReducer from './Reducer/Dispatch';

const rootReducer = combineReducers({ useReducer })

const GlobalStore = configureStore({ reducer: rootReducer })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={GlobalStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
