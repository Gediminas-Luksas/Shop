import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import shop from '../../../shop';
import { ProductCard, ProductsContainer } from '../../components';

function Favorites({ products, toggleFavorite, updateCartCount }) {
  return (
    <ProductsContainer>
      {products.map(product => (
        <ProductCard
          key={product.id}
          {...product}
          toggleFavorite={toggleFavorite}
          updateCartCount={updateCartCount}
        />
      ))}
    </ProductsContainer>
  );
}

Favorites.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  toggleFavorite: PropTypes.func.isRequired,
  updateCartCount: PropTypes.func.isRequired,
};

Favorites.defaultProps = {
  products: [],
};

const enhance = connect(
  state => ({
    products: shop.selectors.getFavoriteProducts(state),
  }),
  dispatch => ({
    toggleFavorite: id =>
      dispatch({
        type: shop.types.TOGGLE_FAVORITE_PRODUCT,
        payload: id,
      }),
    updateCartCount: (id, count) =>
      dispatch({
        type: shop.types.UPDATE_PRODUCT_CART_COUNT,
        payload: { id, count },
      }),
  })
);
export default enhance(Favorites);
