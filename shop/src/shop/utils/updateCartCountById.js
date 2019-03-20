export default (products, id, cartCount) =>
  products.map(product => {
    if (id === product.id) {
      return { ...product, cartCount };
    }
    return product;
  });
