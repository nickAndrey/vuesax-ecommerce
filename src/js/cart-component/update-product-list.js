export class UpdateProductList {
  constructor() {
    this.nodeList = [];
    this.isUpdated = false;
    this.carTempl = document.querySelector('cart-component');
  }

  addProductListener(isAdded = false) {
    if (isAdded) {
      this.isUpdated = true;
      this.onUpdate();
    }
  }

  onUpdate() {
    if (this.isUpdated) {
      this.isUpdated = false;
      return this.carTempl.setAttribute(
        'updated',
        JSON.stringify(Math.random())
      );
    }
  }

  render() {
    const products = JSON.parse(localStorage.getItem(`products`));
    if (products) {
      this.nodeList = [];
      const cartTemplate = document.querySelector('#cart');

      Object.entries(products).map(([key, value]) => {
        const clone = cartTemplate.content.cloneNode(true);
        const row = clone.querySelector('.row');
        row.dataset.index = key;

        const prodId = row.querySelector('.product-id');
        prodId.textContent = value.id;

        const prodTitle = row.querySelector('.product-title');
        prodTitle.textContent = value.title;

        const prodDescribe = row.querySelector('.product-describe');
        prodDescribe.textContent = value.describe;

        const prodPrice = row.querySelector('.product-price');
        prodPrice.textContent = value.price;

        this.nodeList = [...this.nodeList, row];
      });
      return this.nodeList;
    }
  }
}
