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
    data.map((item, idx) => {
      const productComponent = document.createElement('product-component');
      productComponent.setAttribute('index', idx);
      productComponent.setAttribute('category', item.category);
      productComponent.innerHTML = `
        <img src="${item.src}" alt="${item.title}" class="product__img" slot="product-img"/>
        <button class="vote" slot="rating">${item.rating}</button>
        <span class="price" slot="price">${item.price}$</span>
        <h4 class="title" slot="title">${item.title}</h4>
        <p class="description" slot="description">${item.description}</p>
        <app-button
          slot="wish"
          icon="/img/goods/like.svg"
          aria-label="like product" 
          class="like"
        >wish list</app-button>
        <app-add-to-cart 
            slot="add" 
            data-index="${idx}" 
            icon="/img/goods/add-to-cart.svg"
            aria-label="add product" 
            class="add"
        >add to cart</app-add-to-cart>
      `;
      const prodList = document.querySelector('.products');
      prodList.append(productComponent);
    });
  }
}
const getProducts = new GetProducts();
getProducts.onInit();
