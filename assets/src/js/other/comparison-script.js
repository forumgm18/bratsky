// Цвет выбранной категории изменяется
// На странице отображено как: 
// "Аккумуялторы (2)  Электроника (4)"
$(document).ready(function () {
  $('.comparison__category').click(function () {
    if (!($(this).children('input').prop("checked"))) {
      $('.comparison__category').removeClass('active');
      $(this).toggleClass("active");
    }
  })
});

// ON/OFF  переключатель. При преключении изменяется цвет
// На странице отображено как: 
// "Только различающиеся параметры"
$(document).ready(function () {
  $('.different-form__switch').click(function () {
    if ($(this).children('input').prop("checked")) {
      $(this).toggleClass("active");
    }
  })
});

// Сравнение товаров, слайдер
$('.comparison__list').slick({
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  variableWidth: true,
  prevArrow: $('.prev-comparison'),
  nextArrow: $('.next-comparison'),
  responsive: [
    {
      breakpoint: 1220,
      settings: {
        slidesToShow: 3,
        centerMode: true
      }
    },

    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false
      }
    }
  ]
});

// Открытие спойлера таблицы 
$(document).ready(function () {
  $('.table__spoiler-body').hide()
  $('.table__spoiler-check').click(function () {
    $(this).parent().toggleClass("folded").toggleClass("unfolded").next().toggle('normal');
    $(this).toggleClass("open-position");
  })
});

// При нажатии на кнопку "Очистить список"
// Удалить все товары с списке сравниваемых товаров
$(document).ready(function () {
  $('.comparison__clean-list').click(function () {
    $('.comparison__list').remove();
    $('.slider-arrows').remove();
  })
});


// Удалить товар в списке сравниваемых товаров
$(document).ready(function () {
  $('.btn-item-delite').click(function () {
    $(this).parent().remove();
  })
});
// тоже самое, но для фиксированного меню
$(document).ready(function () {
  $('.btn-item-delite-fixed').click(function () {
    $(this).parent().parent().parent().remove();
  })
});


// *******************************************
// Закрепить/Открепить список сравниваемых товаров
jQuery(document).ready(function ($) {
  // Если браузер не мобильный, работаем
  var
    $window = $(window), // Основное окно
    $target = $(".comparison__fixed"), // Блок, который нужно фиксировать при прокрутке
    $target2 = $('.comparison__list'),
    $h = $target2.offset().top; // Определяем координаты верха нужного блока 

  $window.on('scroll', function () {
    // Как далеко вниз прокрутили страницу
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // Если прокрутили скролл ниже макушки нужного блока, включаем ему фиксацию
    if (scrollTop > $h) {
      if (window.screen.width >= '600') {
        $target.addClass("fixed");
        $('.comparison__empty-block').addClass("display-block"); // Показать пустой блок
        $('.comparison__empty-block').removeClass("hidden"); // Показать пустой блок
      }
      // Иначе возвращаем всё назад
    } else {
      $target.removeClass("fixed");
      $('.comparison__empty-block').addClass("hidden"); // Скрыть пустой блок
      $('.comparison__empty-block').removeClass("display-block"); // Скрыть пустой блок
    }
  });

});
