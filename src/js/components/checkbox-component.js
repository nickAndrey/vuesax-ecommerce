class CheckboxComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        .checkbox-container {
          display: block;
          position: relative;
          padding-left: 20px;
          cursor: pointer;
          user-select: none;
        }
        input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }
        input:checked ~ .checkmark {
          background-color: #6f64f8;
        }
        input:checked ~ .checkmark:after {
          display: block;
        }    
        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 15px;
          width: 15px;
          background-color: #eee;
        }
        .checkmark:after {
          content: '';
          position: absolute;
          display: none;
          left: 5px;
          top: 1px;
          width: 3px;
          height: 7px;
          border: solid #fff;
          border-width: 0 3px 3px 0;
          transform: rotate(45deg);
        }
      </style>
      <label class="checkbox-container">
        <input type="checkbox">
        <span class="checkmark"></span>
        <slot></slot>
      </label>
    `;
  }
}

customElements.define('app-checkbox', CheckboxComponent);
