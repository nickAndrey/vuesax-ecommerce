const template = document.createElement('template');
template.innerHTML = `<slot/>`;

class CircleComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static observedAttributes() {
    return ['width', 'height', 'border-radius', 'background', 'color'];
  }

  connectionCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.style.width = 20 + 'px';
    this.style.height = '20px';
    this.style.borderRadius = '50%'
  }
}

customElements.define('circle-component', CircleComponent);