/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import portfolioMiddleware from '../middlewares/portfolio';
import reducer from '../reducers';

const middlewares = applyMiddleware(
    portfolioMiddleware
  );

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = composeEnhancers(middlewares);
  
  const store = createStore(reducer, enhancers);
  
  export default store;
  
