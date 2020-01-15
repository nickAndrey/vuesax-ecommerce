class GetProducts {
  constructor() {
    this.apiProducts = `https://my-json-server.typicode.com/nickAndrey/vuesax-ecommerce/goods`;
  }

  onInit() {
    fetch(this.apiProducts)
      .then((resp) => resp.json())
      .then((data) => this.render(data))
      .catch((errMsg) => console.error(errMsg));
  }

  render(data) {
    const template = document.querySelector('#product-component');
    data.map((item, idx) => {
      const clone = template.content.cloneNode(true);
      const productNode = clone.querySelector('.product');
      productNode.dataset.index = idx;
      productNode.setAttribute('category', item.category);

      const pictNode = document.createElement('picture');
      pictNode.innerHTML = `
        <source type="image/webp" srcset="${item.srcWebp}"/>
        <img src="${item.src}" alt="${item.title}" class="product__img"/>
      `;
      productNode.insertBefore(pictNode, productNode.querySelector('.product__info'));

      const voteNode = productNode.querySelector('.vote');
      voteNode.textContent = item.rating;

      const priceNode = productNode.querySelector('.price');
      priceNode.textContent = item.price;

      const titleNode = productNode.querySelector('.title');
      titleNode.textContent = item.title;

      const descriptionNode = productNode.querySelector('.description');
      descriptionNode.textContent = item.description;

      const addBtn = productNode.querySelector('.controls .add');
      addBtn.dataset.index = idx;

      const prodList = document.querySelector('.products');
      prodList.append(productNode);
    });
  }
}
const getProducts = new GetProducts();
getProducts.onInit();
