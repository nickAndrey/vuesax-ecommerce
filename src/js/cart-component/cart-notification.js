import { StoreService } from '../cart-component/store-service';

class CartNotification {
  constructor() {
    this.storeService = new StoreService();
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

    const products = this.storeService.getProducts();
    let table = document.createElement('table');
    table.innerHTML = `<tr>
        <th>id</th>
        <th>name</th>
        <th>price</th>
        <th>description</th>
        <th>count</th>              
        <th>action</th>              
    </tr>`;
    table.classList.add('products-table');
    products.map((item) => {
      const row = `
        <tr>
          <td>${item.id}</td>
          <td>${item.title}</td>
          <td>${item.price}</td>
          <td>${item.describe}</td>
          <td>
            <app-counter 
              count=${item.counter}
              data-index="${item.id}">
            </app-counter>
          </td>
          <td><app-button>remove</app-button></td>
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
