(function() {
  const apiProducts = `https://my-json-server.typicode.com/nickAndrey/vuesax-ecommerce/goods`;
  fetch(apiProducts)
    .then((resp) => resp.json())
    .then((data) => render(data))
    .catch((err) => console.log(err));

  const render = (data) => {
    data.map((item, idx) => {
      const productComponent = document.createElement('product-component');
      productComponent.setAttribute('index', idx);
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
  };
})();
