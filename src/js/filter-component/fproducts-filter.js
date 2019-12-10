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

    const radioTeml = document.createElement('template');
    radioTeml.innerHTML = `
        <radio-button></radio-button>
    `;
    data.map((item) => {
      if (item.category) {
        this.section = 'category';
        this.component = 'app-checkbox';
        this.renderCategory(
          item.category,
          checkboxTempl,
          this.section,
          this.component
        );
      } else if (item.brand) {
        this.section = 'brand';
        this.component = 'app-checkbox';
        this.renderCategory(
          item.brand,
          checkboxTempl,
          this.section,
          this.component
        );
      } else {
        this.section = 'radio-group';
        this.component = 'radio-button';
        this.renderRadio(
          item.multirange,
          radioTeml,
          this.section,
          this.component
        );
      }
    });
  }

  renderRadio(data, template, section, component) {
    for (let item in data) {
      if (data.hasOwnProperty(item)) {
        const clone = template.content.cloneNode(true);

        const inp = clone.querySelector(component);
        inp.name = data[item].name;
        inp.textContent = data[item].title;

        clone.querySelector(section).appendChild(inp);
        this.filtersNode.querySelector('.multirange').appendChild(inp);
      }
    }
  }

  renderCategory(data, template, section, component) {
    for (let item in data) {
      if (data.hasOwnProperty(item)) {
        const clone = template.content.cloneNode(true);
        const formGroup = clone.querySelector('.form-group');

        const appComponent = formGroup.querySelector(component);
        appComponent.innerText = data[item].title;
        appComponent.id = `${section}_${data[item].id}`;

        const result = formGroup.querySelector('.result');
        result.textContent = data[item].result;

        this.filtersNode.querySelector(`.${section}`).appendChild(formGroup);
      }
    }
  }
}

let filters = new Filters();
filters.fetchData();
