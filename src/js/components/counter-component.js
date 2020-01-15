class CounterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        span {
          cursor:pointer; 
        }
        .number{
         display: flex;
        }
        .minus, .plus {
          width: 12px;
          height: 12px;
          background: #f2f2f2;
          border-radius: 25px;         
          border: 1px solid #ddd;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        input {
          height:12px;
          width: 50px;
          text-align: center;
          font-size: 14px;
          border:1px solid #ddd;
          border-radius:4px;
          display: inline-block;
          vertical-align: middle;
        }       
      </style>
      <div class="number">
        <span class="minus">-</span>
        <input type="text" value="1"/>
        <span class="plus">+</span>
      </div>
    `;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('app-counter', CounterComponent);
