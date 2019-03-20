import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
    toggleFavorite: bindActionCreators(shop.actions.toggleFavorite, dispatch),
    updateCartCount: bindActionCreators(shop.actions.updateCartCount, dispatch),
  })
);

export default enhance(Shop);
