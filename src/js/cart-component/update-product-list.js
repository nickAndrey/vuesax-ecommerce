import { StoreService } from '../cart-component/store-service';

export class UpdateProductList {
  constructor() {
    this.storeService = new StoreService();
    this.nodeList = [];
    this.template = document.querySelector('cart-component');
  }

  render() {
    const products = this.storeService.getProducts();
    if (products) {
      this.nodeList = [];
      const cartTemplate = document.querySelector('#cart');

      products.map((item, i) => {
        const clone = cartTemplate.content.cloneNode(true);
        const row = clone.querySelector('.row');
        row.dataset.index = i.toString();

        const prodId = row.querySelector('.product-id');
        prodId.textContent = item.id;

        const prodTitle = row.querySelector('.product-title');
        prodTitle.textContent = item.title;

        const prodDescribe = row.querySelector('.product-describe');
        prodDescribe.textContent = item.describe;

        const prodPrice = row.querySelector('.product-price');
        prodPrice.textContent = item.price;

        this.nodeList = [...this.nodeList, row];
      });
      return this.nodeList;
    }
  }
}
