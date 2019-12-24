import { StoreService } from '../cart-component/store-service';

class CartNotification {
  constructor() {
    this.storeService = new StoreService();
    this.target = document.querySelector('.notifications');
  }

  onInit() {
    this.showCountProducts();
    this.attachEvents();
  }

  showCountProducts() {
    const counterComponent = document.createElement('label-component');
    counterComponent.setAttribute('counter', JSON.stringify(this.storeService.getProducts().length));
    const counter = counterComponent.getAttribute('counter');

    this.setCounterStyles(counterComponent);
    counterComponent.textContent = counter;
    this.target.appendChild(counterComponent);
  }

  setCounterStyles(component) {
    component.setAttribute('width', '20');
    component.setAttribute('height', '20');
    component.setAttribute('background', '#6f64f8');
    component.setAttribute('color', '#fff');
    component.setAttribute('border-radius', '25');
  }

  showModalProducts() {
    const modalProducts = document.createElement('modal-component');
    modalProducts.title = 'products';

    const products = this.storeService.getProducts();
    let table = document.createElement('table');
    table.innerHTML = `<tr>
        <th>id</th>
        <th>name</th>
        <th>price</th>
        <th>description</th>
    </tr>`;
    table.classList.add('products-table');
    products.map((item, idx) => {
      const row = `
        <tr>
          <td>${item.id}</td>
          <td>${item.title}</td>
          <td>${item.price}</td>
          <td>${item.describe}</td>
        </tr>
      `;
      table.innerHTML += row;
    });

    modalProducts.appendChild(table);
    this.setModalStyles(modalProducts);
    document.body.appendChild(modalProducts);
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
