
  const menuItems = document.querySelectorAll('.link-active');
  const dropdownMenu = document.querySelector('.menu__dropdown');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
      dropdownMenu.classList.toggle('active-menu');
    });
  });


  const headerButtonArrow = document.querySelector('.button-arrow');
  const headerNumbers = document.querySelector('.button-arrow__numbers');

  headerButtonArrow.addEventListener('click', () => {
    headerButtonArrow.classList.toggle('active-arrow');
    headerNumbers.classList.toggle('active-menu');
  });
