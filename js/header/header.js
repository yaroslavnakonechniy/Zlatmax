
  const menuItems = document.querySelectorAll('.link-active');
  const dropdownMenu = document.querySelector('.menu__dropdown');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(el => el.classList.remove('active-menu'));
      dropdownMenu.classList.toggle('active-menu');
    });
  });
