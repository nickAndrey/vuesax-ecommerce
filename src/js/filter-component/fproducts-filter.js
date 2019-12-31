class Filters {
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
        <app-checkbox></app-checkbox>
        <span class="result"></span>
      </div>`;

    data.map((item) => {
      if (item.category) {
        this.section = 'category';
        this.component = 'app-checkbox';
        this.renderCategory(item.category, checkboxTempl, this.section, this.component);
      }

      if (item.brand) {
        this.section = 'brand';
        this.component = 'app-checkbox';
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
      fragment.appendChild(radioBtn)
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

      const result = formGroup.querySelector('.result');
      result.textContent = item.result;

      this.filtersNode.querySelector(`.${section}`).appendChild(formGroup);
    });
  }
}

let filters = new Filters();
filters.fetchData();
