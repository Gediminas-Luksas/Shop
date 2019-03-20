import { NAME } from './constants';

export const getProducts = state => state[NAME].products;
export const getCartProducts = state => {
  const allParoducts = getProducts(state);

  return allParoducts.filter(products => products.cartCount > 0);
};

export const getFavoriteProducts = state => {
  const allParoducts = getProducts(state);

  return allParoducts.filter(products => products.isFavorite);
};
export const isLoading = state => state[NAME].loding;
export const getError = state => state[NAME].error;
