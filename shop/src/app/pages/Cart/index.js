import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import shop from '../../../shop';
import { ProductsContainer } from '../../components';
import './index.scss';

function Cart({ products }) {
  const total = products.reduce((result, product) => {
    return result + product.price * product.cartCount;
  }, 0);

  return (
    <ProductsContainer className="Cart">
      {products.map(({ id, name, price, cartCount, image }) => {
        return (
          <div key={id} className="Cart-item">
            <div>
              <img src={image} alt={name} />
              <span>{name}</span>
            </div>
            <div>{price}</div>
            <div>{cartCount}</div>
            <div>{cartCount * price}</div>
          </div>
        );
      })}
      <div className="Cart-total">{`Total: ${total}`}</div>
    </ProductsContainer>
  );
}

Cart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const enhance = connect(state => ({
  products: shop.selectors.getCartProducts(state),
}));
export default enhance(Cart);
