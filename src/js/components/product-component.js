class ProductComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
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
      }
      ::slotted(.product__img) {
        display: block;
        
        margin: auto;
      }
      .product__info {
        display: flex;
        flex-direction: column;
        margin-top: 23px;
      }
      .product__info .price-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .price-info .vote {
        padding: 6px 31px 6px 10px;
        border-radius: 8px;
        border: none;
        color: #ffffff;
        background: #6f64f8;
        position: relative;
        cursor: pointer;
      }
      .price-info .vote:after {
        content: url('/img/goods/star.svg');
        position: absolute;
        right: 10px;
      }
      .price-info * {
        pointer-events: none;
      }
      .price {
        font-weight: bold;
      }
      .title {
        margin: 16px 0 0;
        font-weight: bolder;
      }
      .description {
        font-weight: 300;
        margin: 5px 0 0;
      }
      .controls {
        display: flex;
        margin: 22px -22px 0;
      }
      .controls .like, .controls .add {
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
      .controls * {
        pointer-events: none;
      }
      .controls .like:before, .controls .add:before {
        position: absolute;
      }
      .controls .like {
        border-radius: 0 0 0 8px;
        background: #ededed;
      }
      .controls .add {
        border-radius: 0 0 8px 0;
        background: #6f64f8;
        color: #ffffff;
      }
    </style>
    <div class="product">
      <slot name="product-image"></slot>
      <div class="product__info">
        <div class="price-info">
          <button class="vote"><slot name="vote"></slot></button>
          <span class="price"><slot name="price"></slot></span>
        </div>
        <h4 class="title"><slot name="title"></slot></h4>
        <p class="description"><slot name="description"></slot></p>
        <div class="controls">
          <app-button icon="/img/goods/like.svg" aria-label="like product" class="like">
            wish list
          </app-button>
          <app-add-to-cart icon="/img/goods/add-to-cart.svg" aria-label="add product" class="add">
            add to cart
          </app-add-to-cart>
        </div>
      </div>
    </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('product-component', ProductComponent);
