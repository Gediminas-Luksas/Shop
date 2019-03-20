import * as types from './actionTypes';

const DEFAULT_STATE = {
  token: null,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.LOGIN:
      return { ...state, token: new Date().getTime() };
    case types.LOGOUT:
      return { ...state, token: null };

    default:
      return state;
  }
};
