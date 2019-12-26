import { StoreService } from '../cart-component/store-service';

class ProductComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.storeService = new StoreService();
  }

  connectedCallback() {
    this.render();
  }

  get productIndex() {
    return this.getAttribute('index');
  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        .product {
          background: #ffffff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.135216);
          border-radius: 8px;
          padding: 45px 22px 0;
          display: flex;
          flex-direction: column;
          min-height: 490px;
        }
        ::slotted(.product__img) {        
          margin: auto;
        }
        .product__info {
          display: flex;
          flex-direction: column;
          margin-top: 23px;
        }
        .price-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        ::slotted(.vote) {
          padding: 6px 31px 6px 10px;
          border-radius: 8px;
          border: none;
          color: #ffffff;
          background: #6f64f8;
          position: relative;
          cursor: pointer;
        }
        ::slotted(.vote):after {
          content: url('/img/goods/star.svg');
          position: absolute;
          right: 10px;
        }
        ::slotted(.vote) * {
          pointer-events: none;
        }
        ::slotted(.price) {
          font-weight: bold;
        }
        ::slotted(.title) {
          margin: 16px 0 0;
          font-weight: bolder;
        }
        ::slotted(.description) {
          font-weight: 300;
          margin: 5px 0 0;
        }
        .controls {
          display: flex;
          margin: 22px -22px 0;
        }
        ::slotted(.like),::slotted(.add) {
          width: 50%;
          padding: 13px 0;
          text-transform: uppercase;
          border: none;
          font-weight: bold;
          cursor: pointer;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        slotted(.like) *, ::slotted(.add) * {
            pointer-events: none;
        }
        ::slotted(.like:before), ::slotted(.add:before) {
            position: absolute;
        }
        ::slotted(.like) {
            border-radius: 0 0 0 8px;
            background: #ededed;
        }
        ::slotted(.add) {
            border-radius: 0 0 8px 0;
            background: #6f64f8;
            color: #ffffff;
        }
      </style>
      <div class="product">
        <slot name="product-img"></slot>
        <div class="product__info">
          <div class="price-info">
            <slot name="rating"></slot>
            <slot name="price"></slot>
          </div>
          <slot name="title"></slot>
          <slot name="description"></slot>
          <div class="controls">
            <slot name="wish"></slot>
            <slot name="add"></slot>
          </div>
        </div>
      </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
customElements.define('product-component', ProductComponent);
