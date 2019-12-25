(function() {
  const apiProducts = `https://my-json-server.typicode.com/nickAndrey/vuesax-ecommerce/goods`;
  fetch(apiProducts)
    .then((resp) => resp.json())
    .then((data) => render(data))
    .catch((err) => console.log(err));

  const render = (data) => {
    data.map((item, idx) => {
      const productComponent = document.createElement('product-component');
      productComponent.innerHTML = `
        <span slot="title">${item.title}</span>
        <span slot="vote">${item.rating}</span>
        <span slot="price">${item.price}</span>
        <span slot="description">${item.description}</span>
        <img slot="product-image" src="${item.src}" alt="${item.title}" class="product__img" />
      `;
      // const addToCartBtn = productCard.querySelector('app-add-to-cart');
      // addToCartBtn.dataset.index = idx;
      const prodList = document.querySelector('.products');
      prodList.append(productComponent);
    });
  };
})();
