import { StoreService } from '../cart-component/store-service';

export class ProductsTable {
  constructor() {
    this.storeService = new StoreService();
  }

  renderTable() {
    const productsList = this.storeService.getProducts();
    const table = document.createElement('table');
    table.innerHTML = `<tr>
        <th>id</th>
        <th>name</th>
        <th>price</th>
        <th>description</th>
        <th>count</th>              
        <th>action</th>              
    </tr>`;
    table.classList.add('products-table');
    productsList.map((item) => {
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
          <td>
            <button class="btn remove-product" 
                    type="button" 
                    aria-label="remove product ${item.title}" 
                    data-index="${item.id}">
              <span>remove</span> 
            </button>
          </td>
        </tr>
      `;
      table.innerHTML += row;
    });
    return table;
  }
}
