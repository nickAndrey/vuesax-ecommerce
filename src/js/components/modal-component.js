class ModalComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.attachEvents();
    this.setStyles();
  }

  setStyles() {
    const modal = this.shadowRoot.querySelector('.modal-content');
    modal.style.width = `${this.getAttribute('width')}px`;
  }

  attachEvents() {
    const cancelButton = this.shadowRoot.querySelector('.close');
    cancelButton.addEventListener('click', () => {
      this.disconnectedCallback();
    });
  }

  disconnectedCallback() {
    this.remove();
  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
      .modal {
        display: block; 
        position: fixed;
        z-index: 1; 
        padding-top: 100px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.4);      
      }
      
      .modal-content {
        position: relative;
        background-color: #fefefe;
        margin: auto;       
        padding: 0;
        width: 100%;       
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
        -webkit-animation-name: animatetop;
        -webkit-animation-duration: 0.4s;
        animation-name: animatetop;
        animation-duration: 0.4s;
        border-radius: 4px;
      }
      
      @-webkit-keyframes animatetop {
        from {top:-300px; opacity:0} 
        to {top:0; opacity:1}
      }
      
      @keyframes animatetop {
        from {top:-300px; opacity:0}
        to {top:0; opacity:1}
      }
      
      .close {
        color: white;
        float: right;
        font-size: 28px;
        font-weight: bold;
      }
      
      .close:hover,
      .close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
      }
      
      .modal-header {
        padding: 2px 16px;
        background-color: #6f64f8;
        color: white;
        border-radius: 4px 4px 0 0;
      }
      
      .modal-body {
        padding: 15px;
      }
      
      .modal-footer {
        padding: 2px 16px;
        background-color: #6f64f8;
        color: white;
        border-radius: 0 0 4px 4px;
      }
      </style>
      <div class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <span class="close">&times;</span>
            <h4>${this.getAttribute('title')}</h4>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('modal-component', ModalComponent);
