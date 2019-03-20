import thunk from 'redux-thunk';
import logger from './logger';

const middleware = [logger, thunk];

export default middleware;
