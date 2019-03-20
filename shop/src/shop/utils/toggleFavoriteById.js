export default (products, id) =>
  products.map(product => {
    if (id === product.id) {
      return { ...product, isFavorite: !product.isFavorite };
    }
    return product;
  });
