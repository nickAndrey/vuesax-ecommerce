import { AppButton } from '../components/base-button';
import { StoreService } from '../cart-component/store-service';

class AddToCart extends AppButton {
  constructor() {
    super();
    this.storeService = new StoreService();
  }

  static get observedAttributes() {
    return [`id`];
  }

  get dataIndex() {
    return this.dataset.index;
  }

  addToStore() {
    const parent = document.querySelector(`product-component[index="${this.dataIndex}"]`);
    this.storeService.setProduct([
      {
        id: this.dataIndex,
        price: parent.querySelector(`.price`).textContent.substr(1),
        title: parent.querySelector(`.title`).textContent,
        describe: parent.querySelector(`.description`).textContent,
      },
    ]);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener(`click`, () => {
      this.addToStore();
      this.storeService.updateProductsCounter();
    });
  }
}

customElements.define(`app-add-to-cart`, AddToCart);
