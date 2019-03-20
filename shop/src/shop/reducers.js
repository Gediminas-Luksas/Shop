import { toggleFavoriteById, updateCartCountById } from './utils';
import * as types from './actionTypes';

const DEFAULT_STATE = {
  products: [],
  error: null,
  loading: false,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return { ...state, loading: true };
    case types.FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case types.FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case types.TOGGLE_FAVORITE_PRODUCT:
      return {
        ...state,
        products: toggleFavoriteById(state.products, action.payload),
      };
    case types.UPDATE_PRODUCT_CART_COUNT: {
      const { id, count } = action.payload;
      return {
        ...state,
        products: updateCartCountById(state.products, id, count),
      };
    }

    default:
      return state;
  }
};
