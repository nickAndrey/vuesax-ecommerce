(function() {
  const products = document.querySelector('.products');

  const btnListView = products.querySelector('.list-view');
  const goListView = () => {
    products.classList.add('wide');
  };

  const btnGridView = products.querySelector('.grid-view');
  const goGridView = () => {
    products.classList.remove('wide');
  };

  products.addEventListener('click', (evt) => {
    const target = evt.target;
    if (target === btnListView) {
      goListView(target);
    } else if (target === btnGridView) {
      goGridView(target);
    }
  });
})();
