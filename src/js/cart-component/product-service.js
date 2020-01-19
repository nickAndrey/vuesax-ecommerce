import { StoreService } from './store-service';

export class ProductService {
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
        counter: 1,
      },
    ]);
  }

  showCounterProducts(btn) {
    btn.childNodes[0].style.display = 'none';
    btn.childNodes[1].style.display = 'none';

    const productsList = this.storeService.getProducts();
    const countProducts = productsList.filter((item) => item.id === btn.dataset.index)[0].counter;
    const appCounter = `<app-counter count="${countProducts}" data-index="${btn.dataset.index}"></app-counter>`;

    if (!btn.querySelector('app-counter')) {
      btn.innerHTML += appCounter;
    }
  }

  hideCounterProducts() {
    [...document.querySelectorAll('.add')]
      .filter((item) => {
        return item.querySelector('app-counter');
      })
      .map((button) => {
        button.querySelector('app-counter').remove();
        button.childNodes[0].style.display = '';
        button.childNodes[1].style.display = '';
      });
  }

  attachEvents() {
    this.products.addEventListener('click', (evt) => {
      const target = evt.target;
      if (target.classList.contains('add')) {
        this.addToStore(target);
        this.showCounterProducts(target);
        this.storeService.showCountProducts();
      }
    });
  }
}
const productService = new ProductService();
productService.onInit();
