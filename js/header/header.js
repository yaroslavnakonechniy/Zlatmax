
  const menuItems = document.querySelectorAll('.link-active');
  const dropdownMenu = document.querySelector('.menu__dropdown');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(el => el.classList.remove('active-line-under-link'));
      item.classList.add('active-line-under-link');
      dropdownMenu.classList.toggle('active-block');
    });
  });


  const headerButtonArrow = document.querySelector('.header__button-arrow');
  const headerNumbers = document.querySelector('.button-arrow__numbers');

  headerButtonArrow.addEventListener('click', () => {
    headerButtonArrow.classList.toggle('active-arrow');
    headerNumbers.classList.toggle('active-block-numbers');
  });
