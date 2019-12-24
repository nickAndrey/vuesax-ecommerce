class LabelComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['counter'];
  }

  attributeChangedCallback() {
    this.textContent = this.getAttribute('counter');
  }

  connectedCallback() {
    this.render();
    this.updateStyle();
  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = `<style></style><slot></slot>`;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  updateStyle() {
    this.shadowRoot.querySelector('style').textContent = `
      :host {
        color: ${this.getAttribute('color')};
        width: ${this.getAttribute('width')}px;
        height: ${this.getAttribute('height')}px;
        background: ${this.getAttribute('background')};
        border-radius: ${this.getAttribute('border-radius')}px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        position: absolute;
        top: -11px;
        right: -11px;
      }
    `;
  }
}

customElements.define('label-component', LabelComponent);
