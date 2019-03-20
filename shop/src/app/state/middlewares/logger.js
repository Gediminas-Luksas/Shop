import shop from '../../../shop';
const logger = ({ getState, dispatch }) => next => action => {
 // const state = getState();
  const result = next(action);
  //const nextState = getState();

  if (action.type === shop.types.TOGGLE_FAVORITE_PRODUCT) {
    dispatch({ type: 'RANDOM' });
  }
  //console.log(action.type, action.payload, 'state', state, result, nextState);

  return result;
};
export default logger;
