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
    const parent = elem.closest('.product');
    this.storeService.setProduct([
      {
        id: parent.dataset.index,
        price: parent.querySelector('.price').textContent.substr(1),
        title: parent.querySelector('.title').textContent,
        describe: parent.querySelector('.description').textContent,
        counter: 1
      },
    ]);
  }

  toggleBtnContent(btn) {
    btn.childNodes[0].style.display = 'none';
    btn.childNodes[1].style.display = 'none';

    const productsList = this.storeService.getProducts();
    const countProducts = productsList[btn.dataset.index].counter;

    const appCounter = `<app-counter count="${countProducts}" data-index="${btn.dataset.index}"></app-counter>`;
    if (!btn.querySelector('app-counter')) {
      btn.innerHTML += appCounter;
    }
  }

  attachEvents() {
    this.products.addEventListener('click', (evt) => {
      const target = evt.target;
      if (target.classList.contains('add')) {
        this.addToStore(target);
        this.storeService.showCountProducts();
        this.toggleBtnContent(target);
      }
    });
  }
}
const productService = new ProductService();
productService.onInit();
