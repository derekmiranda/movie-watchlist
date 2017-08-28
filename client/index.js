import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxMulti from 'redux-multi';
import { batchedSubscribe } from 'redux-batched-subscribe';
import App from './components/App';
import rootReducer from './reducers';

const middleware = [
  reduxMulti,  
];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middleware.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const finalCreateStore = batchedSubscribe(fn => fn())(createStoreWithMiddleware);
const store = finalCreateStore(rootReducer);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);