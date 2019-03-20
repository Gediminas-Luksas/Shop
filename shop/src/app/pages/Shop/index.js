import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import shop from '../../../shop';
import { ProductCard, ProductsContainer } from '../../components';

function Shop({ products, toggleFavorite, updateCartCount }) {
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

Shop.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  toggleFavorite: PropTypes.func.isRequired,
  updateCartCount: PropTypes.func.isRequired,
};

Shop.defaultProps = {
  products: [],
};

const enhance = connect(
  state => ({ products: shop.selectors.getProducts(state) }),
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

export default enhance(Shop);
