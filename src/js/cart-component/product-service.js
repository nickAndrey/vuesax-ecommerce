import { StoreService } from './store-service';

class ProductService {
  constructor() {
    this.storeService = new StoreService();
    this.products = document.querySelector('.products');
  }

  onInit() {
    this.attachEvents();
  }

  addToStore(elem) {
    const parent = elem.closest(`.product`);
    this.storeService.setProduct([
      {
        id: parent.dataset.index,
        price: parent.querySelector(`.price`).textContent.substr(1),
        title: parent.querySelector(`.title`).textContent,
        describe: parent.querySelector(`.description`).textContent,
      },
    ]);
  }

  attachEvents() {
    this.products.addEventListener(`click`, (evt) => {
      const target = evt.target;
      if (target.classList.contains('add')) {
        this.addToStore(target);
        this.storeService.updateProductsCounter();
      }
    });
  }
}
const productService = new ProductService();
productService.onInit();
