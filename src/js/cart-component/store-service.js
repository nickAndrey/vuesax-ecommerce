export class StoreService {
  constructor() {
    this.productsCounter = null;
  }

  getProducts() {
    let productsList = localStorage.getItem('products');
    let newProductsList = [];
    if (productsList) {
      newProductsList = JSON.parse(productsList);
    }
    return newProductsList;
  }

  setProduct(product = []) {
    let productsList = this.getProducts();
    const index = productsList.findIndex((item) => item.id === product[0].id);
    if (index === -1) {
      productsList = [...productsList, ...product];
      this.productsCounter = productsList.length;
    }
    localStorage.setItem('products', JSON.stringify(productsList));
  }

  getProductsCount() {
    return this.productsCounter;
  }
}
