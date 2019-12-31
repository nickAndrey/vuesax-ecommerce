class RadioButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.setAttributes();
  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        :host {
          display: inline-block;
          position: relative;
          cursor: default;
        }    
        :host(:focus) {
          outline: 0;
        }    
        :host(:focus)::before {
          box-shadow: 0 0 1px 2px #5B9DD9;
        }    
        :host::before {
          content: '';
          display: block;
          width: 10px;
          height: 10px;
          border: 1px solid #eee;
          background: #eee;
          position: absolute;
          left: -18px;
          top: 3px;
          border-radius: 50%;
        }      
        :host([aria-checked="true"])::before {
          background: #6f64f8;
        }
        :host(:hover) {
            cursor: pointer;
        }      
      </style>
      <slot></slot>
    `;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  setAttributes() {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'radio');
    }

    if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', -1);
    }
  }
}
customElements.define('radio-button', RadioButton);

class RadioGroup extends HTMLElement {
  constructor() {
    super();
  }

  get checkedBtn() {
    return this.querySelector('[aria-checked="true"]');
  }

  connectedCallback() {
    this.render();

    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'radiogroup');
    }
    if (this.checkedBtn) {
      this.uncheckAll();
      this.checkNode(this.checkedBtn);
    } else {
      if (this.querySelector('[role="radio"]')) {
        this.querySelector('[role="radio"]').setAttribute('tabindex', 0);
      }
    }
    this.addEventListener('click', this.onClick);
  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-left: 20px;
        }
      </style>
      <slot></slot>
    `;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  setChecked(node) {
    this.uncheckAll();
    this.checkNode(node);
    this.focusNode(node);
  }

  uncheckAll() {
    const radioBts = this.querySelectorAll('[role="radio"]');
    radioBts.forEach((btn) => {
      btn.setAttribute('aria-checked', 'false');
      btn.tabIndex = -1;
    });
  }

  checkNode(node) {
    node.setAttribute('aria-checked', 'true');
    node.tabIndex = 0;
  }

  focusNode(node) {
    node.focus();
  }

  onClick(evt) {
    if (evt.target.getAttribute('role') === 'radio') {
      this.setChecked(evt.target);
    }
  }
}
customElements.define('radio-group', RadioGroup);
