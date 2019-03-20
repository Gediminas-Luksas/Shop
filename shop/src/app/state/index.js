import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import middleware from './middlewares';

const store = createStore(reducers, applyMiddleware(...middleware));

export default store;
