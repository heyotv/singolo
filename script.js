window.onload = function() {

  addMenuClickHandler();
}

const addMenuClickHandler = () => {
  const menu = document.querySelector('.navigation-list'),
    items = menu.querySelectorAll('a');
  menu.addEventListener('click', (event) => {
    items.forEach(item => item.classList.remove('navigation-item-selected'));
    event.target.classList.add('navigation-item-selected');
  });
}