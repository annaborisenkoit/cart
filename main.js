document.addEventListener('DOMContentLoaded', () => {
  // Выбираем все элементы с ценами товаров
  const cartItems = document.querySelectorAll('.cart-item .price');

  // Выбираем элемент с общей стоимостью
  const totalPriceElement = document.querySelector('.price_total_sum');

  // Функция для расчета общей стоимости товаров в корзине
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      // Извлекаем значение цены, убираем ' руб.' и приводим к числу
      const price = parseInt(item.innerHTML.replace('Цена: ', '').replace(' руб.', ''));
      totalPrice += price;
    });
    return totalPrice;
  };

  // Функция для применения 20% скидки к общей стоимости
  const applyDiscount = () => {
    // Рассчитываем текущую общую стоимость
    const currentTotalPrice = calculateTotalPrice();
    // Рассчитываем стоимость со скидкой
    const discountedPrice = currentTotalPrice * 0.8;
    // Обновляем элемент с общей стоимостью в DOM
    totalPriceElement.innerHTML = `${discountedPrice.toFixed(2)} руб.`;
    // Отключаем кнопку после применения скидки
    discountButton.removeEventListener('click', applyDiscount);
    discountButton.disabled = true;
  };

  // Выбираем кнопку для применения скидки
  const discountButton = document.querySelector('.price_discount');
  // Добавляем обработчик событий на кнопку для применения скидки
  discountButton.addEventListener('click', applyDiscount);

  // Первоначальный расчет общей стоимости (если нужно установить значение при загрузке страницы)
  const initialTotalPrice = calculateTotalPrice();
  totalPriceElement.innerHTML = `${initialTotalPrice} руб.`;
});
