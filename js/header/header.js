
  const menuItems = document.querySelectorAll('.link-active');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
    });
  });
