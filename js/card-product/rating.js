
document.querySelectorAll('.product__rating').forEach(product => {
  const stars = Array.from(product.querySelectorAll('.star'));
  const output = product.querySelector('.rating-value');

  stars.forEach(star => {
    star.addEventListener('click', () => {
      const value = Number(star.dataset.value);

      // Скидаємо активні класи **тільки в межах цієї картки**
      stars.forEach(s => s.classList.remove('active'));

      // Додаємо active до всіх, у яких value <= вибраного
      stars.forEach(s => {
        if (Number(s.dataset.value) <= value) s.classList.add('active');
      });

      // Показуємо значення в цій картці
      if (output) output.textContent = `Ваш рейтинг: ${value}`;
    });
  });
});
