import { StoreService } from '../cart-component/store-service';
import { ProductsTable } from '../cart-component/products-table';
import { ProductService } from './product-service';

class CartNotification {
  constructor() {
    this.storeService = new StoreService();
    this.productsTable = new ProductsTable();
    this.productService = new ProductService();
    this.target = document.querySelector('.notifications');
  }

  onInit() {
    this.showCountInLabel();
    this.attachEvents();
  }

  showCountInLabel() {
    const labelComponent = document.createElement('label-component');
    labelComponent.setAttribute('counter', JSON.stringify(this.storeService.getProducts().length));
    const counter = labelComponent.getAttribute('counter');

    this.setLabelStyles(labelComponent);
    labelComponent.textContent = counter;
    this.target.appendChild(labelComponent);
  }

  setLabelStyles(component) {
    component.setAttribute('width', '20');
    component.setAttribute('height', '20');
    component.setAttribute('background', '#6f64f8');
    component.setAttribute('color', '#fff');
    component.setAttribute('border-radius', '25');
  }

  showModalProducts() {
    const modalProducts = document.createElement('modal-component');
    modalProducts.title = 'products';
    this.setModalStyles(modalProducts);
    modalProducts.appendChild(this.productsTable.renderTable());
    document.body.appendChild(modalProducts);
    this.onRemoveProduct(modalProducts);
  }

  onRemoveProduct(modal) {
    const btnList = modal.shadowRoot.host.querySelectorAll('.remove-product');
    btnList.forEach((btn) => {
      btn.onclick = (evt) => {
        this.storeService.removeProduct(btn.dataset.index);
        this.storeService.showCountProducts();
        this.productService.hideCounterProducts();
        evt.target.closest('tr').remove();
      }
    });
  }

  setModalStyles(component) {
    component.setAttribute('width', '800');
  }

  attachEvents() {
    this.target.addEventListener('click', () => {
      this.showModalProducts();
    });
  }
}

const cartNotification = new CartNotification();
cartNotification.onInit();
