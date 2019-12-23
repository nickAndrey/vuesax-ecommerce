class RadioButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.setAttribute('role', 'radio');
    this.setAttribute('tabindex', -1);
    this.setAttribute('aria-checked', false);
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: relative;
          display: block;
          padding-left: 20px;
          margin-bottom: 15px;
        }
        :host([aria-checked="true"]) {
          outline: none !important;
        }
        :host::before {
          content: '';
          display: flex;
          align-items: center;
          justify-content: center;
          width: 15px;
          height: 15px;
          border: 1px solid #eee;
          left: 0;
          position: absolute;         
          border-radius: 50%;
        }
        :host([aria-checked="true"])::before {
          content: '';
          display: block;
          width: 5px;
          height: 5px;
          background: #6f64f8;
          position: absolute;
          border: 5px solid #eee;;         
          border-radius: 50%;
        }
      </style>
      <slot></slot>
    `;
  }
}
customElements.define('radio-button', RadioButton);

class RadioGroup extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.setAttribute('role', 'radiogroup');
    this.radios = [...this.querySelectorAll('radio-button')];
    if (this.hasAttribute('selected')) {
      let selected = this.getAttribute('selected');
      this._selected = selected;
      this.radios[selected].setAttribute('tabindex', 0);
      this.radios[selected].setAttribute('aria-checked', true);
    } else {
      this._selected = 0;
      // this.radios[0].setAttribute('tabindex', 0);
    }
    this.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(e) {
    const idx = this.radios.indexOf(e.target);
    if (idx === -1) {
      return;
    }
    this.selected = idx;
  }

  set selected(idx) {
    if (isFinite(this.selected)) {
      let previousSelected = this.radios[this.selected];
      previousSelected.tabIndex = -1;
      previousSelected.removeAttribute('aria-checked', false);
    }
    let newSelected = this.radios[idx];
    newSelected.tabIndex = 0;
    newSelected.focus();
    newSelected.setAttribute('aria-checked', true);
    this.setAttribute('selected', idx);
    this._selected = idx;
  }
  get selected() {
    return this._selected;
  }
}
customElements.define('radio-group', RadioGroup);
