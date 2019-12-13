(function() {
  const apiProducts = `https://my-json-server.typicode.com/nickAndrey/vuesax-ecommerce/goods`;
  fetch(apiProducts)
    .then((resp) => resp.json())
    .then((data) => renderProduct(data))
    .catch((err) => console.log(err));

  const renderProduct = (data) => {
    const template = document.querySelector('#product');
    data.map((item, idx) => {
      const clone = template.content.cloneNode(true);
      const productCard = clone.querySelector('.product');

      const prodImg = productCard.querySelector('.product__img');
      prodImg.src = item.src;
      prodImg.alt = item.title;

      const prodVote = productCard.querySelector('.vote');
      prodVote.textContent = item.rating;

      const prodPrice = productCard.querySelector('.price');
      prodPrice.textContent = '$' + item.price;

      const prodTitle = productCard.querySelector('.title');
      prodTitle.textContent = item.title;

      const prodDescribe = productCard.querySelector('.description');
      prodDescribe.textContent = item.description;

      const addToCartBtn = productCard.querySelector('app-add-to-cart');
      addToCartBtn.dataset.index = idx;

      const prodList = document.querySelector('.products');
      prodList.append(productCard);
    });
  };
})();
