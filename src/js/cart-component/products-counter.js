import { StoreService } from '../cart-component/store-service';

const template = document.createElement('template');
template.innerHTML = `<span></span>`;

export class ProductsCounter {
  constructor() {
    this.storeService = new StoreService();
    this.counter = this.storeService.getProductsCount();
  }

  onInit() {

  }

  render() {
    const countTarget = document.querySelector(['data-counter']);
    if (countTarget) {
      countTarget.appendChild(template.content.cloneNode(true));
    }
  }
}
