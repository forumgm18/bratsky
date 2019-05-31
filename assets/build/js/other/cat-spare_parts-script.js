// input'ы в фильтре "Номер, описание" нельзя менять
$('input[name="number"]').prop('disabled', true);

// Фильтр "Классификатор"
// При переключении двух radio изменяются отображаемые фильтры внизу
// - Общий 
// - От производителя
$('#CLASSIFIER-INPUTS-FILTER').click(function () {
  var classRadioVal = $('input[name="class"]:checked').val(); // Записать значение выбранного radio
  $('.filter-producer').hide(); // Скрыть блоки, принадлежащие "Общий"
  $('.filter-general').hide(); // Скрыть блок, принадлежащий "От производителя"

  switch (classRadioVal) {
    case 'producer':
      $('.filter-producer').show(); // Показать блок, принадлежащий "От производителя"
      break;
    case 'general':
      $('.filter-general').show(); // Показать блоки, принадлежащие "Общий"
      break;
  }
});

// Переход на > Nissan Almera
// Главная > Каталог запчастей > Nissan Almera
$('.modification__link').click(function () {
  $('.modification').hide(); // скрыть начальный section
  $('.titles__text').hide(); // скрыть текстоый блок в main__header
  // изменить текст хлебных крошек
  $('.bread-2').show(); // показать ... > Каталог запчастей
  $('.bread-activ').html("Nissan Almera"); // изменить текст active (breadcrumb)
  $('.titles__h2').html("Nissan Almera"); // изменить название h2
  $('.classifier-section').addClass('display-grid'); // Показать .classifier-section
});

// Переход на > Двигатель
// Главная > Каталог запчастей > Nissan Almera > Двигатель
$('.classifier__item').click(function () {
  var href_value = $(this).text();
  // изменить текст хлебных крошек
  $('.bread-3').show(); // показать ... > Nissan Almera
  $('.bread-4').html(href_value); // записать текст, который будет отображён после следующего шага
  $('.bread-activ').html(href_value); // изменить текст active (breadcrumb)
  $('.title-h3').html(href_value); // изменить название h3
  $('.title-h3').show(); // показать h3
  $('.titles').addClass('display-grid-titles'); // Показать section .classifier-section
  $('.classifier__list').hide(); // Скрыть 1 список 
  $('.classifier__list2').show(); // Показать 2 список
});

// Переход на > Головка цилиндра
// Главная > Каталог запчастей > Nissan Almera > Двигатель > Головка цилиндра
$('.classifier__item2').click(function () {
  var href_value = $(this).text();
  // изменить текст хлебных крошек
  $('.bread-4').show(); // показать ... > Двигатель
  $('.bread-5').html(href_value); // записать текст, который будет отображён после следующего шага
  $('.bread-activ').html(href_value); // изменить текст active (breadcrumb)
  $('.title-h3').html(href_value); // изменить название h3
  $('.title-h3').show(); // показать h3
  $('.classifier__list2').hide(); // Скрыть 2 список 
  $('.classifier__list3').show(); // Показать 3 список
});


// Переход на > Головка цилиндра
// Главная > Каталог запчастей > Nissan Almera > Двигатель > Головка цилиндра
$('.classifier__item3').click(function () {
  var href_value = $(this).text();
  // изменить текст хлебных крошек
  $('.bread-5').show(); // показать ... > Головка цилиндра
  $('.bread-6').html(href_value); // записать текст, который будет отображён после следующего шага
  $('.bread-activ').html(href_value); // изменить текст active (breadcrumb)
  $('.title-h3').html(href_value); // изменить название h3
  $('.title-h3').show(); // показать h3
  $('.classifier__list3').hide(); // Скрыть 3 список 
  $('.found-parts').show(); // Показать схемы со списками номеров
});

// Переход на схему (последняя на этой странице)
$('.found-parts__wp1').click(function () {
  var href_value = $(this).text();
  href_value = href_value.split(';')[0]; // Удалить из строки всё, что после знака ";"
  // изменить текст хлебных крошек
  $('.bread-6').show(); // показать ... > Крышка головки цилиндра, прокладка
  $('.bread-activ').html(href_value); // изменить текст active (breadcrumb)
  $('.titles__h2').html(href_value); // изменить название h2
  $('.title-h3').hide(); // скрыть h3
  $('.classifier-section').hide(); // Скрыть .classifier-section
  $('.titles').removeClass('display-grid-titles'); // Сделать div с титулом h2 снова display:block
  $('.diagram-section').addClass('display-grid'); // Показать схему
});
