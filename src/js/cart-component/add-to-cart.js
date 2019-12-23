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

  addToStore(elm) {
    const parent = elm.closest(`.product__info`);
    this.storeService.setProduct([
      {
        id: this.getAttribute(`data-index`),
        price: parent.querySelector(`.price-info .price`).textContent.substr(1),
        title: parent.querySelector(`.title`).textContent,
        describe: parent.querySelector(`.description`).textContent,
      },
    ]);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener(`click`, (evt) => {
      const target = evt.target;
      this.addToStore(target);
    });
  }
}

customElements.define(`app-add-to-cart`, AddToCart);
