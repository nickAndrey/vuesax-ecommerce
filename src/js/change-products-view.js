class ChangeProductsView {
  constructor() {
    this.productSetting = document.querySelector('.products__setting');
    this.products = document.querySelector('.products');
  }

  onInit() {
    this.onEvents();
  }

  switchToGridView(className) {
    this.products.classList.remove(className);
  }

  switchToLineView(className) {
    this.products.classList.add(className);
  }

  onEvents() {
    this.productSetting.addEventListener('click', (evt) => {
      let target = evt.target;
      if (target.classList.contains('list-view')) {
        this.switchToLineView('wide');
      } else if (target.classList.contains('grid-view')) {
        this.switchToGridView('wide');
      }
    });
  }
}

const changeProductsView = new ChangeProductsView();
changeProductsView.onInit();
