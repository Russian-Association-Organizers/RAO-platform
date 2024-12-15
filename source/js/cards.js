// Получаем элемент <style>
let style = document.querySelector('style');
// Получаем все элементы с классом "news"
let news = document.querySelectorAll('.news');
// Получаем количество элементов news
let newsLength = news.length;
// Количество блоков, которые надо оставить видимыми. 
let visibleBlockCount = 9;

// Вызываем и обновляем слайдер при изменении размера окна
window.addEventListener('resize', function(event) {
  // Получаем размер окна
  let innerWidth = window.innerWidth;

  // Запускаем функцию при размере окна меньшем, чем 1040 пикселов
  if (innerWidth < 1040) {
    SliderInitialization();
  }
}, true);

// Запускаем функцию при загрузке страницы
document.addEventListener("DOMContentLoaded", SliderInitialization);
// Запускаем функцию при загрузке страницы
document.addEventListener("DOMContentLoaded", HideNewsComponent); 

// Инициализация слайдера
function SliderInitialization() {
  // Настройки слайдера
  $('.news-block--js').slick({
    arrows: false,
    dots: false,
    responsive: [
        // При разрешении до 10 000 пикселов
        {
          breakpoint: 10000,
          settings: "unslick" // Отключаем слайдер
        },
        // При разрешении до 1039 пикселов
        {
          breakpoint: 1039,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 10000
          }
        },
        // При разрешении до 767 пикселов
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 10000
          }
        },
    ]
  });
}

// Скрывает все элементы, кроме указанного количества
function HideNewsComponent() {
  // Проверяем наличие длины у массива элементов, и наличие элементов соответственно
  if (newsLength !== undefined || newsLength !== NaN || newsLength !== 0) { 
    // Регистрируем все элементы, раздаём им классы с порядковым номером
    RegisteringNewComponent();

    // Скрываем блоки
    for (let i = visibleBlockCount; i <= newsLength - 1; i++) {
      let j = i + 1;
      style.innerHTML+= `
        @media (min-width: 1040px) {
          .news-block__item-${j} {
            display: none;
          }
        }

        @media (min-width: 1200px) {
          .news-block__item-${j} {
            display: flex;
          }
        }
        `;
    }
  }
}

// Регистрирует все новостные блоки, добовляя каждому класс с порядковым номером
function RegisteringNewComponent() {
  for (let i = 0; i <= newsLength - 1; i++) {
    // Вспомогательная переменная
    let j = i + 1;
    // Проверяем наличие класса у элемента
    if (news[i].classList.contains(`news-block__item-${j}`)) continue;
    // добавляем класс элементу, если раньше его не было
    else news[i].classList.add(`news-block__item-${j}`);
  }
}

//<!DOCTYPE Liky>
