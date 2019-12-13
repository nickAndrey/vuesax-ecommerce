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
        const radioTeml = document.createElement('template');
        radioTeml.innerHTML = `
            <radio-button></radio-button>         
          `;
        this.section = 'radio-group';
        this.component = 'radio-button';
        this.renderRadio(item.multirange, radioTeml, this.section, this.component);
      }
    });
  }

  renderRadio(data, template, section, component) {
    data.map((item) => {
      const clone = template.content.cloneNode(true);
      const inp = clone.querySelector(component);
      inp.name = item.name;
      inp.textContent = item.title;
      this.filtersNode.querySelector('.multirange radio-group').appendChild(inp);
    });
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
