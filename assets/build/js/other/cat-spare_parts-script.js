// input'ы в фильтре "Номер, описание" нельзя менять
$('input[name="cat-spare_parts_number"]').prop('disabled', true);

// Фильтр "Классификатор"
// При переключении двух radio изменяются отображаемые фильтры внизу
// - Общий 
// - От производителя
$('#CLASSIFIER-INPUTS-FILTER').click(function () {
  var classRadioVal = $('input[name="cat-spare_parts_class"]:checked').val(); // Записать значение выбранного radio
  $('.cat-spare_parts_filter-producer').hide(); // Скрыть блоки, принадлежащие "Общий"
  $('.cat-spare_parts_filter-general').hide(); // Скрыть блок, принадлежащий "От производителя"

  switch (classRadioVal) {
    case 'producer':
      $('.cat-spare_parts_filter-producer').show(); // Показать блок, принадлежащий "От производителя"
      break;
    case 'general':
      $('.cat-spare_parts_filter-general').show(); // Показать блоки, принадлежащие "Общий"
      break;
  }
});

// Переход на > Nissan Almera
// Главная > Каталог запчастей > Nissan Almera
$('.cat-spare_parts_modification__link').click(function () {
  $('.cat-spare_parts_modification').hide(); // скрыть начальный section
  $('.cat-spare_parts_titles__text').hide(); // скрыть текстоый блок в main__header
  // изменить текст хлебных крошек
  $('.bread-2').show(); // показать ... > Каталог запчастей
  $('.bread-activ').html("Nissan Almera"); // изменить текст active (breadcrumb)
  $('.cat-spare_parts_titles__h2').html("Nissan Almera"); // изменить название h2
  $('.cat-spare_parts_classifier-section').addClass('display-grid'); // Показать .classifier-section
});

// Переход на > Двигатель
// Главная > Каталог запчастей > Nissan Almera > Двигатель
$('.cat-spare_parts_classifier__item').click(function () {
  var href_value = $(this).text();
  // изменить текст хлебных крошек
  $('.bread-3').show(); // показать ... > Nissan Almera
  $('.bread-4').html(href_value); // записать текст, который будет отображён после следующего шага
  $('.bread-activ').html(href_value); // изменить текст active (breadcrumb)
  $('.cat-spare_parts_title-h3').html(href_value); // изменить название h3
  $('.cat-spare_parts_title-h3').show(); // показать h3
  $('.cat-spare_parts_titles').addClass('display-grid-titles'); 
  $('. cat-spare_parts_classifier__list').hide(); // Скрыть 1 список 
  $('. cat-spare_parts_classifier__list2').show(); // Показать 2 список
});

// Переход на > Головка цилиндра
// Главная > Каталог запчастей > Nissan Almera > Двигатель > Головка цилиндра
$('.cat-spare_parts_classifier__item2').click(function () {
  var href_value = $(this).text();
  // изменить текст хлебных крошек
  $('.bread-4').show(); // показать ... > Двигатель
  $('.bread-5').html(href_value); // записать текст, который будет отображён после следующего шага
  $('.bread-activ').html(href_value); // изменить текст active (breadcrumb)
  $('.cat-spare_parts_title-h3').html(href_value); // изменить название h3
  $('.cat-spare_parts_title-h3').show(); // показать h3
  $('. cat-spare_parts_classifier__list2').hide(); // Скрыть 2 список 
  $('. cat-spare_parts_classifier__list3').show(); // Показать 3 список
});


// Переход на > Головка цилиндра
// Главная > Каталог запчастей > Nissan Almera > Двигатель > Головка цилиндра
$('.cat-spare_parts_classifier__item3').click(function () {
  var href_value = $(this).text();
  // изменить текст хлебных крошек
  $('.bread-5').show(); // показать ... > Головка цилиндра
  $('.bread-6').html(href_value); // записать текст, который будет отображён после следующего шага
  $('.bread-activ').html(href_value); // изменить текст active (breadcrumb)
  $('.cat-spare_parts_title-h3').html(href_value); // изменить название h3
  $('.cat-spare_parts_title-h3').show(); // показать h3
  $('. cat-spare_parts_classifier__list3').hide(); // Скрыть 3 список 
  $('.cat-spare_parts_found-parts').show(); // Показать схемы со списками номеров
});

// Переход на схему (последняя на этой странице)
$('.cat-spare_parts_found-parts__wp1').click(function () {
  var href_value = $(this).text();
  href_value = href_value.split(';')[0]; // Удалить из строки всё, что после знака ";"
  // изменить текст хлебных крошек
  $('.bread-6').show(); // показать ... > Крышка головки цилиндра, прокладка
  $('.bread-activ').html(href_value); // изменить текст active (breadcrumb)
  $('.cat-spare_parts_titles__h2').html(href_value); // изменить название h2
  $('.cat-spare_parts_title-h3').hide(); // скрыть h3
  $('.cat-spare_parts_classifier-section').hide(); // Скрыть .classifier-section
  $('.cat-spare_parts_titles').removeClass('display-grid-titles'); // Сделать div с титулом h2 снова display:block
  $('.cat-spare_parts_diagram-section').addClass('display-grid'); // Показать схему
});
