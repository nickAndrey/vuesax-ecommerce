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

  removeProduct(id) {
    console.log(id);
  }

  showCountProducts() {
    const labelComponent = document.querySelector('label-component');
    if (labelComponent) {
      labelComponent.setAttribute('counter', JSON.stringify(this.getProducts().length));
    }
  }

  setCountProducts(count, index) {
    const productsList = this.getProducts();
    productsList[index].counter = count;
    localStorage.setItem('products', JSON.stringify(productsList));
  }
}
