import { StoreService } from '../cart-component/store-service';

class CounterComponent extends HTMLElement {
  constructor() {
    super();
    this.storeService = new StoreService();
  }

  connectedCallback() {
    this.render();
    this.attachEvents();
  }

  static get observedAttributes() {
    return ['count', 'data-index'];
  }

  get countAttribute() {
    return this.getAttribute('count');
  }

  get productIndex() {
    return this.dataset.index;
  }

  setCountInStore() {
    this.storeService.setCountProducts(this.countAttribute, this.productIndex);
  }

  attachEvents() {
    const component = this.shadowRoot.querySelector('.number');
    const counterInp = component.querySelector('input[type="number"]');
    component.addEventListener('change', (evt) => {
      const target = evt.target;
      if (target === counterInp) {
        this.setCountHandle(target);
      }
    });

    component.addEventListener('click', (evt) => {
      const target = evt.target;
      if (target.classList.contains('minus')) {
        this.decrementCounter(counterInp);
      } else if (target.classList.contains('plus')) {
        this.incrementCounter(counterInp);
      }
    });
  }

  incrementCounter(inp) {
    ++inp.value;
    this.setAttribute('count', inp.value);
    this.setCountInStore();
  }

  decrementCounter(inp) {
    if (inp.value < 2) {
      return;
    }
    --inp.value;
    this.setAttribute('count', inp.value);
    this.setCountInStore();
  }

  setCountHandle(inp) {
    this.setAttribute('count', inp.value);
    this.setCountInStore();
  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        :host {
          background: #ffffff;
          padding: 5px;
          color: #000000;
          border-radius: 20px;
        }
        span {
          cursor:pointer; 
        }
        .number{
         display: flex;
        }
        .minus, .plus {
          width: 20px;
          height: 20px;
          border-radius: 20px;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        input {
          width: 50px;
          text-align: center;
          font-size: 14px;
          border: none;
          border-radius: 2px;
          display: inline-block;
          vertical-align: middle;
          margin: 0 5px;
        }       
      </style>
      <div class="number">
        <span class="minus">-</span>
        <input type="number" value="${this.countAttribute}" min="1"/>
        <span class="plus">+</span>
      </div>
    `;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('app-counter', CounterComponent);
