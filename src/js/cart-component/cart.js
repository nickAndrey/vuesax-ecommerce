import { UpdateProductList } from './update-product-list';

class CartComponent extends HTMLElement {
  constructor() {
    super();
    this.updList = new UpdateProductList();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML += `<style>
      :host {
          /*position: fixed;*/
        background: #ffffff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.135216);
        border-radius: 8px;
        margin: auto;
        padding: 10px 15px;
        display: grid;
      }
      .row {
        display: grid;
        grid-template-columns: 20px repeat(4, 1fr);
      }
      .row > div {
        border: 1px solid;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    </style>`;
  }

  connectedCallback() {
    this.renderProducts();
  }

  static get observedAttributes() {
    return ['updated'];
  }

  attributeChangedCallback() {
    this.updList.onUpdate(this);
    this.renderProducts();
  }

  renderProducts() {
    const nodeList = this.updList.render();
    if (nodeList) {
      nodeList.forEach((item, i) => {
        let rowElem = this.shadowRoot.querySelectorAll('.row')[i];
        if (!rowElem) {
          this.shadowRoot.appendChild(item);
        }
        if (rowElem && rowElem.dataset.index !== item.dataset.index) {
          this.shadowRoot.appendChild(item);
        }
      });
    }
  }
}

customElements.define('cart-component', CartComponent);
