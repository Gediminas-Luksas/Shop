import { combineReducers } from 'redux';
import auth from '../../auth';
import shop from '../../shop';

export default combineReducers({
  [auth.constants.NAME]: auth.reducer,
  [shop.constants.NAME]: shop.reducer,
});
