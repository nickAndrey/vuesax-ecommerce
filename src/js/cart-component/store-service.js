export class StoreService {
  constructor() {}

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
    }
    localStorage.setItem('products', JSON.stringify(productsList));
  }

  updateProductsCounter() {
    const counter = document.querySelector('label-component');
    if (counter) {
      counter.setAttribute('counter', JSON.stringify(this.getProducts().length));
    }
  }
}
