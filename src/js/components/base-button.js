export class AppButton extends HTMLElement {
  constructor() {
    super();
    this.setAttribute('role', 'button');
    this.setAttribute('tabindex', '0');
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-flex;
          padding: 6px 12px;
          font-size: inherit;
          cursor: pointer;
          text-align: center;
          text-decoration: none;
          outline: none;          
          border: none;
          border-radius: 15px;
          align-items: center;
        }
        img {
          display: none;
          margin-right: 0.5em;
        }
      </style>
      <img  alt="" src=""/><slot></slot>`;
    this.iconElm = this.shadowRoot.querySelector('img');
    this.goSetIcon(this.getAttribute('icon'));
  }

  static get observedAttributes() {
    return ['icon'];
  }

  goSetIcon(url) {
    if (!this.iconElm) return;
    if (url === null) {
      this.iconElm.style.display = 'none';
    } else {
      this.iconElm.src = url;
      this.iconElm.style.display = 'block';
    }
  }
}

customElements.define('app-button', AppButton);
