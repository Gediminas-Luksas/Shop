import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import logger from './logger';

const middleware = [logger, thunk, apiMiddleware];

export default middleware;
