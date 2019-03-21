import { getJSON } from 'redux-api-middleware';

export default (action, state, payload) =>
  getJSON(payload).then(products =>
    products.map(product => ({
      ...product,
      isFavorite: false,
      cartCount: 0,
    }))
  );
