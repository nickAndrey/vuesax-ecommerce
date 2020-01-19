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

  removeProduct(idx) {
    let productsList = this.getProducts();
    let updateProductsList = productsList.filter((product) => product.id !== idx);
    localStorage.setItem('products', JSON.stringify(updateProductsList));
  }

  showCountProducts() {
    const labelComponent = document.querySelector('label-component');
    if (labelComponent) {
      labelComponent.setAttribute('counter', JSON.stringify(this.getProducts().length));
    }
  }

  setCountProducts(count, index) {
    const productsList = this.getProducts();
    productsList.filter((item) => item.id === index)[0].counter = count;
    localStorage.setItem('products', JSON.stringify(productsList));
  }
}
