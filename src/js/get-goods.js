(function() {
  fetch(`https://my-json-server.typicode.com/nickAndrey/vuesax-ecommerce/goods`)
    .then((resp) => resp.json())
    .then((data) => renderProduct(data))
    .catch((err) => console.log(err));

  const renderProduct = (data) => {
    const template = document.querySelector('#product');
    Object.entries(data).map(([key, value]) => {
      const clone = template.content.cloneNode(true);
      const productCard = clone.querySelector('.product');
      const cloneTo = document.querySelector('.goods');
      const productImg = productCard.querySelector('.product__img');

      productImg.src = value.src;
      productImg.alt = value.title;
      cloneTo.append(productCard);
    });
  };
})();
