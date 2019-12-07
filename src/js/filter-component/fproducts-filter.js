class Filters {
  constructor() {
    this.api = './filters.json';
    this.filtersNode = document.querySelector('.filters');
    this.appendTo = '';
  }

  fetchData() {
    fetch(this.api)
      .then((resp) => resp.json())
      .then((data) => this.render(data))
      .catch((err) => console.log(err));
  }

  render(data) {
    const template = document.createElement('template');
    template.innerHTML = `
      <div class="form-group">
          <input type="checkbox">
          <label></label>
          <span class="result"></span>
      </div>`;
    data.map((item) => {
      if (item.category) {
        this.appendTo = 'category';
      } else {
        this.appendTo = 'brand';
      }
      this.renderCategory(item.category, template, this.appendTo);
      this.renderCategory(item.brand, template, this.appendTo);
    });
  }

  renderCategory(data, template, appendTo) {
    for (let item in data) {
      if (data.hasOwnProperty(item)) {
        const clone = template.content.cloneNode(true);
        const formGroup = clone.querySelector('.form-group');

        const inp = formGroup.querySelector('input');
        inp.title = data[item].title;
        inp.id = `${appendTo}_${data[item].id}`;

        const label = formGroup.querySelector('label');
        label.htmlFor = inp.id;
        label.textContent = data[item].title;

        const result = formGroup.querySelector('.result');
        result.textContent = data[item].result;

        this.filtersNode.querySelector(`.${appendTo}`).appendChild(formGroup);
      }
    }
  }
}

let filters = new Filters();
filters.fetchData();
