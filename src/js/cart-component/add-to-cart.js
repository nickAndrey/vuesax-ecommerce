import { AppButton } from '../components/base-button';
import { UpdateProductList } from "./update-product-list";

class AddToCart extends AppButton {
  constructor() {
    super();
    this.updList = new UpdateProductList();
  }

  get elementId() {
    return this.getAttribute(`data-index`);
  }

  static get observedAttributes() {
    return [`id`];
  }

  addToStore(elm) {
    const price = elm.querySelector(`.price-info .price`).textContent.substr(1);
    const title = elm.querySelector(`.title`).textContent;
    const description = elm.querySelector(`.description`).textContent;

    const product = [
      {
        id: this.elementId,
        price: price,
        title: title,
        describe: description,
      },
    ];

    const writeToStorage = () => {
      if (localStorage.getItem(`products`)) {
        let products = JSON.parse(localStorage.getItem(`products`));
        let index = products.findIndex((item) => item.id === product[0].id);
        if (index === -1) {
          localStorage.setItem(
            `products`,
            JSON.stringify([...products, ...product])
          );
        }
      } else {
        localStorage.setItem(`products`, JSON.stringify(product));
      }
    };

    writeToStorage();
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener(`click`, (evt) => {
      const target = evt.target;
      const parent = target.closest(`.product__info`);
      this.addToStore(parent);
      this.updList.addProductListener(true);
    });
  }
}

customElements.define(`app-add-to-cart`, AddToCart);
