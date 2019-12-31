import { CheckboxComponent } from '../components/checkbox-component';

export class Filters {
  constructor() {
    this.api = './filters.json';
    this.filtersNode = document.querySelector('.filters');
    this.section = '';
    this.component = '';
  }

  fetchData() {
    fetch(this.api)
      .then((resp) => resp.json())
      .then((data) => this.render(data))
      .catch((err) => console.log(err));
  }

  render(data) {
    const checkboxTempl = document.createElement('template');

    checkboxTempl.innerHTML = `
      <div class="form-group">
        <filter-component></filter-component>
        <span class="result"></span>
      </div>`;

    data.map((item) => {
      if (item.category) {
        this.section = 'category';
        this.component = 'filter-component';
        this.renderCategory(item.category, checkboxTempl, this.section, this.component);
      }

      if (item.brand) {
        this.section = 'brand';
        this.component = 'filter-component';
        this.renderCategory(item.brand, checkboxTempl, this.section, this.component);
      }

      if (item.multirange) {
        this.component = 'radio-button';
        this.renderRadio(item.multirange, this.component);
      }
    });
  }

  renderRadio(data, component) {
    const fragment = document.createDocumentFragment();
    data.map((item) => {
      const radioBtn = document.createElement(component);
      radioBtn.textContent = item.title;
      fragment.appendChild(radioBtn);
    });
    const radioGroup = document.createElement('radio-group');
    radioGroup.appendChild(fragment);
    this.filtersNode.querySelector('.multirange').appendChild(radioGroup);
  }

  renderCategory(data, template, section, component) {
    data.map((item) => {
      const clone = template.content.cloneNode(true);
      const formGroup = clone.querySelector('.form-group');

      const appComponent = formGroup.querySelector(component);
      appComponent.innerText = item.title;
      appComponent.id = `${section}_${item.id}`;
      appComponent.setAttribute('filter-by', item.title);

      const result = formGroup.querySelector('.result');
      result.textContent = item.result;

      this.filtersNode.querySelector(`.${section}`).appendChild(formGroup);
    });
  }

  handleFilter() {
    const filters = document.querySelectorAll('[filter-by]');
    filters.forEach((item) => {});
  }
}

let filters = new Filters();
filters.fetchData();

class FilterComponent extends CheckboxComponent {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.attachEvents(this);
  }

  attachEvents(node) {
    node.addEventListener('click', (evt) => {
      const products = document.querySelectorAll('product-component');
      [...products].map((product) => {
        if (product.getAttribute('category') !== evt.target.getAttribute('filter-by')) {
          product.setAttribute('hidden', 'hidden');
        }
      });
    });
  }
}
customElements.define('filter-component', FilterComponent);
