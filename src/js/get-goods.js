(function() {
  const apiProducts = `https://my-json-server.typicode.com/nickAndrey/vuesax-ecommerce/goods`;
  fetch(apiProducts)
    .then((resp) => resp.json())
    .then((data) => renderProduct(data))
    .catch((err) => console.log(err));

  const renderProduct = (data) => {
    const template = document.querySelector('#product');
    Object.entries(data).map(([key, value]) => {
      const clone = template.content.cloneNode(true);
      const productCard = clone.querySelector('.product');

      const prodImg = productCard.querySelector('.product__img');
      prodImg.src = value.src;
      prodImg.alt = value.title;

      const prodVote = productCard.querySelector('.vote');
      prodVote.textContent = value.rating;

      const prodPrice = productCard.querySelector('.price');
      prodPrice.textContent = '$' + value.price;

      const prodTitle = productCard.querySelector('.title');
      prodTitle.textContent = value.title;

      const prodDescribe = productCard.querySelector('.description');
      prodDescribe.textContent = value.description;

      const addToCartBtn = productCard.querySelector('app-add-to-cart');
      addToCartBtn.dataset.index = key;

      const prodList = document.querySelector('.products');
      prodList.append(productCard);
    });
  };
})();
