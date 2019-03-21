import { RSAA } from 'redux-api-middleware';
import * as types from './actionTypes';
import { mapProducts } from './utils';

export const toggleFavorite = id => ({
  type: types.TOGGLE_FAVORITE_PRODUCT,
  payload: id,
});

export const updateCartCount = (id, count) => ({
  type: types.UPDATE_PRODUCT_CART_COUNT,
  payload: { id, count },
});

export const getProducts = () => ({
  [RSAA]: {
    endpoint: 'https://boiling-reaches-93648.herokuapp.com/food-shop/products',
    method: 'GET',
    types: [
      types.FETCH_PRODUCTS,
      {
        type: types.FETCH_PRODUCTS_SUCCESS,
        payload: mapProducts,
      },
      {
        type: types.FETCH_PRODUCTS_FAILURE,
        payload: () => 'Something went wrong',
      },
    ],
  },
});

// export const getProducts = () => dispatch => {
//   dispatch({ type: types.FETCH_PRODUCTS });
//   fetch('https://boiling-reaches-93648.herokuapp.com/food-shop/products')
//     .then(response => response.json())
//     .then(json => {
//       const products = json.map(product => ({
//         ...product,
//         isFavorite: false,
//         cartCount: 0,
//       }));
//       dispatch({ type: types.FETCH_PRODUCTS_SUCCESS, payload: products });
//     })
//     .catch(() =>
//       dispatch({
//         type: types.FETCH_PRODUCTS_FAILURE,
//         payload: 'Something went wrong',
//       })
//     );
// };
