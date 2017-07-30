import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';

const middleware = [];

if (process.env.NODE_ENV === 'dev') {
  const { logger } = require('redux-logger');
  middleware.push(logger);
}

// const store = createStore(
//   rootReducer,
//   applyMiddleware(...middleware)
// )

ReactDom.render(
  <App />,
  document.getElementById('root')
);