const basketHandoverRow = 'tpl/basket-handover-row.html';
function formatStr(str) {
    str = (str + '').replace(/(\.(.*))/g, '');
    var arr = str.split('');
    var str_temp = '';
    if (str.length > 3) {
        for (var i = arr.length - 1, j = 1; i >= 0; i--, j++) {
            str_temp = arr[i] + str_temp;
            if (j % 3 == 0) {
                str_temp = ' ' + str_temp;
            }
        }
        return str_temp;
    } else {
        return str;
    }
}
    function showMobMenu(obj) {
      var timer, objTime;
      clearTimeout(timer);
  
      if ($(obj).next().hasClass('show')){
        // Скрываем текущее меню
        $(obj).parent().toggleClass('show');
        $(obj).next().toggleClass('show');
        // Показываем меню на уровень выше
        $(obj).parent().siblings().removeClass('dn');
        $(obj).parent().parent().siblings(".dropdown-toggle").removeClass('dn');
        //Добавляем Анимацию
        objTime = $(obj).parent().parent();
        objTime.addClass('animated bounceInLeft');
        //Удаляем Анимацию
        timer = setTimeout( function(){ objTime.removeClass('animated bounceInLeft'); }, 1000);
      } else {
        // Скрываем соседние пункты меню  
        $(obj).parent().siblings().addClass('dn');
        // Скрываем Заголовок предыдущего пункта
        $(obj).closest(".dropdown-menu").siblings(".dropdown-toggle").addClass('dn');
        // Показываем выбранное меню
        $(obj).parent().toggleClass('show');
        $(obj).next().toggleClass('show');
        //Добавляем Анимацию
        objTime = $(obj).next();
        objTime.addClass('animated bounceInRight');
        //Удаляем Анимацию
        timer = setTimeout( function(){ objTime.removeClass('animated bounceInRight'); }, 1000);

      }
    }

function setMenuContainerParams(obj) {
  var idName = $(obj).children('.nav-link.dropdown-toggle').attr('id');
  $("[data-toggleID="+idName+"]").css('left', -$(obj).offset().left);
  $("[data-toggleID="+idName+"]").css('width', $(window).width());
}
function setSumMenuContainerParams(obj) {
  // Задаем размеры и позицию меню
  if ($(window).width()>991) {
    $(obj).children('.dropdown-menu').css('height', $(obj).closest('.mcatalog-content').height() - 3 + 15+5 );                 // 3px толщина border-top
    $(obj).children('.dropdown-menu').css('width', $(obj).closest(".mcatalog").width()-$(obj).closest('.mcatalog-content').width() - 30  ); // 30px поля col
    $(obj).children('.dropdown-menu').css('left', $(obj).closest('.mcatalog-content').width()  );                        // 15px ширина эффекта тени
    $(obj).children('.dropdown-menu').css('top', -$(obj).position().top );                           // 
  } else {
    $(obj).children('.dropdown-menu').attr('style','');
  }    
}

function initSlider(name) {
  $(name).slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    appendArrows: '.slider-navigation.product.tab-1',
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4 } },
        { breakpoint: 992,  settings: { slidesToShow: 3 } },
        { breakpoint: 768,  settings: { slidesToShow: 2 } },
        { breakpoint: 500,  settings: { slidesToShow: 1 } }
      ]    
  });

}

function incIndex(s){
  var arr=s.split("-");
  arr[arr.length-1] = parseInt(arr[arr.length-1],10) + 1;
  return arr.join("-");
}


function cloneAkkHandover(e) {
  e.preventDefault();
  if ($(e.currentTarget.parentElement).prev().siblings().length) { // если еще есть строчки с аккуммами
      var s = incIndex($(e.currentTarget.parentElement).prev().find("input").attr("name")); // получаем id для нового аккума
      $(e.currentTarget.parentElement).before($(e.currentTarget.parentElement).prev().clone()); //дублируем предпоследнюю строку 
      var newAkk = $(e.currentTarget.parentElement).prev() // ссылка на новую строку
      $(newAkk).find(".slider").remove(); // удаляем "ползунок"
      $(newAkk).find(".new-price").html("0 &#8381;" ); // обнуляем цену
      var newAkkInp = $(newAkk).find("input"); // находим input с емкостью аккума
      $(newAkkInp).attr({"id":s,"name":s}); // обновляем атрибуты чтобы небыло дублирования
      $(newAkkInp).bootstrapSlider(); // инициализируем "ползунок"
  } else { // если удалили все то остается только подбавлять
      var parentDiv = $(e.currentTarget.parentElement).parent(); // определяем контейнер для добавления
      var s = $(parentDiv).html(); // сохраняем код строки со ссылкой "Добавить..."
      $(parentDiv).load(basketHandoverRow,function(response, status, xhr) { // загружаем блок с сервера
          if (status == "error") { // если ошибка то выводим предупреждение
            var msg = "Не удалось добавить аккумулятор: ";
            $(this).html(msg + xhr.status + " " + xhr.statusText);
          }
          $(this).find("input").bootstrapSlider(); // инициализируем "ползунок"
          $(this).append(s); // добавляем в конец сохраненный код ссылки "Добавить..."
      });
  }
};
function basketСlose(e) {
  e.preventDefault();
  $(e.currentTarget.parentElement).remove(); // удаляем "строку"
};

 
$(document).ready(function(){
  $('.product-slider.tab-1').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    appendArrows: '.slider-navigation.product.tab-1',
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4 } },
        { breakpoint: 992,  settings: { slidesToShow: 3 } },
        { breakpoint: 768,  settings: { slidesToShow: 2 } },
        { breakpoint: 480,  settings: { slidesToShow: 1 } }
      ]    
  });
  $('.product-slider.tab-2').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    appendArrows: '.slider-navigation.product.tab-2',
    // variableWidth: true
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4 } },
        { breakpoint: 992,  settings: { slidesToShow: 3 } },
        { breakpoint: 768,  settings: { slidesToShow: 2 } },
        { breakpoint: 480,  settings: { slidesToShow: 1 } }
      ]    
  });
  $('.product-slider.tab-3').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    appendArrows: '.slider-navigation.product.tab-3',
    // variableWidth: true
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4 } },
        { breakpoint: 992,  settings: { slidesToShow: 3 } },
        { breakpoint: 768,  settings: { slidesToShow: 2 } },
        { breakpoint: 480,  settings: { slidesToShow: 1 } }
      ]    
  });
  $('.product-slider.tab-4').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    appendArrows: '.slider-navigation.product.tab-4',
    // variableWidth: true
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4 } },
        { breakpoint: 992,  settings: { slidesToShow: 3 } },
        { breakpoint: 768,  settings: { slidesToShow: 2 } },
        { breakpoint: 480,  settings: { slidesToShow: 1 } }
      ]    
  });
  
  $('.brand-slider.tab-1').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    appendArrows: '.slider-navigation.brand.tab-1',
    // variableWidth: true
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4 } },
        { breakpoint: 992,  settings: { slidesToShow: 3 } },
        { breakpoint: 768,  settings: { slidesToShow: 2 } },
        { breakpoint: 500,  settings: { slidesToShow: 1 } }
      ]    
  });
  $('.brand-slider.tab-2').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    appendArrows: '.slider-navigation.brand.tab-2',
    // variableWidth: true
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4 } },
        { breakpoint: 992,  settings: { slidesToShow: 3 } },
        { breakpoint: 768,  settings: { slidesToShow: 2 } },
        { breakpoint: 500,  settings: { slidesToShow: 1 } }
      ]    
  });
  $('.brand-slider.tab-3').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    appendArrows: '.slider-navigation.brand.tab-3',
    // variableWidth: true
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4 } },
        { breakpoint: 992,  settings: { slidesToShow: 3 } },
        { breakpoint: 768,  settings: { slidesToShow: 2 } },
        { breakpoint: 500,  settings: { slidesToShow: 1 } }
      ]    
  });
  $('.brand-slider.tab-4').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    appendArrows: '.slider-navigation.brand.tab-4',
    // variableWidth: true
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4 } },
        { breakpoint: 992,  settings: { slidesToShow: 3 } },
        { breakpoint: 768,  settings: { slidesToShow: 2 } },
        { breakpoint: 500,  settings: { slidesToShow: 1 } }
      ]    
  });

//=========== Слайдер картинок в карточке товара ========================
$('.full-img-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.mini-img-slider'
});
$('.mini-img-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.full-img-slider',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  centerMode: true,
  centerPadding: '0px',
});

//================== Плагин выбора даты ===================
var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        
$('#date-service').datepicker({
        locale: 'ru-ru',
        uiLibrary: 'bootstrap4',
        format: 'dd mmm yyyy',
        minDate: today
    });
$('#other__delivery__date').datepicker({
        locale: 'ru-ru',
        format: 'ddd dd.mm',
        uiLibrary: 'bootstrap4',
        minDate: today,
        change: function (e) {
          var x = e.currentTarget.value === "";
                  if(e.currentTarget.value === ""){
                    $(this).parent().parent().removeClass("ds");
                    e.currentTarget.value= e.currentTarget.defaultValue;
                  } else {
                    $(this).parent().parent().addClass("ds");
                    // e.currentTarget.value= e.currentTarget.defaultValue;
                  }
                },        
    });

//================== Плагин Таймер обратного отсчета ===================
$('.timer').countdown({until: 491408, format: 'yowdHMS'});
//================== Плагин Таймер обратного отсчета Конец ===================

//================== Инициализация Поповеров ===================
  

function update_popper(refEl, popperId,x, y) {
        
        new Popper(refEl, $(popperId), {
            placement: 'bottom',
            html: true,
            trigger: 'click',

            modifiers: {
                offset: {
                    enabled: true,
                    // offset: (x - 150) + ',' + (-1 * (y - 140))
                    offset: x + ',' + y
                },
                flip: {
                    behavior: ['left', 'bottom', 'top']
                },
                preventOverflow: {
                    enabled: true,
                    padding: 10,
                    escapeWithReference: false,
                }
            },
        });
      // Popper.scheduleUpdate();

    }

function popoversHide() {
  $("#basket_items").hide();
  $("#add2Favorites").hide();
  $(".atf_active").removeClass("atf_active");

}


  var reference = $('.add_to_favorites');
  var basket = $(".basket");
  var basket_popover = $("#basket_items");
  var popover = $("#add2Favorites");
  popover.hide();
  popover.popover();

$(document).on('click touchend', function(e) {
  var target = $(e.target).parent();
 
  // if(target.is(popover)  || target.is(reference) || target.is(basket)) { 
  if(target.prevObject.hasClass('popover')  || target.closest('.popover').length  || target.is(reference) ) { 
    return; 
  }  else {
    // popover.hide();
    // $(".add_to_favorites.atf_active").removeClass("atf_active");
    popoversHide();
  }
 });
  
$(".add_to_favorites").on('click touchend', function(e) {
  e.preventDefault();
  update_popper($(this), "#add2Favorites", -115, 10);

  var l = $(this).offset().left;   // позиция инициализирующего элемента 
  var pa = l - 10;

  if ($(this).hasClass("atf_active")) {
    popover.hide();
    $(this).removeClass("atf_active");
  } else {
    if (l > 260) { pa = 250 } 
    $(popover).find('.arrow').css("left", pa + "px");
    $(".add_to_favorites.atf_active").removeClass("atf_active");
    popover.show();
    $(this).addClass("atf_active");
  }

  // $(this).toggleClass("atf_active");
 
  });
  
  $('#fv_close').on('click',function(e){
    e.preventDefault();
    popover.hide();
    $(".atf_active").removeClass("atf_active");
  
  });



$(".basket").on('click touchend', function(e) {
  e.stopPropagation()

  update_popper($(this), "#basket_items", 0, 0);

  if ($(this).hasClass("atf_active")) {
    $("#basket_items").hide();
    $(this).removeClass("atf_active");
  } else {
    $("#basket_items").show();
    $(this).addClass("atf_active");
  }

});

  $('.del_item').on('click',function(e){
    e.preventDefault();
    e.stopPropagation()
    $(this).parent().remove();
  });
  
  $('.del_all_items').on('click',function(e){
    e.preventDefault();
    e.stopPropagation()
    $(this).parent().siblings(".popover-body").find(".item-row").remove();
    popoversHide();
  });


//================== Инициализация Поповеров Конец ===================


$(".filter-block .card-body .add-scroll").overlayScrollbars({ resize: "none" });

$("input.range").on("slide", function(slideEvt) {
  var descr= $(this).parent().siblings(".range-description");
  descr.children(".range-min").text(formatStr(slideEvt.value[0]));
  descr.children(".range-max").text(formatStr(slideEvt.value[1]));
});


$('.main-products a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  var oldArrowsClass = ".slider-navigation.product." + $(e.relatedTarget).attr("data-arrows-container"); // previous active tab
  var newArrowsClass = ".slider-navigation.product." + $(e.target).attr("data-arrows-container"); // previous active tab
  var newSliderName = ".product-slider." + $(e.target).attr("data-arrows-container"); // previous active tab

  $(oldArrowsClass).css("display", "none");
  $(newArrowsClass).css("display", "flex");
  $(newSliderName).slick('setPosition',0);

});
$('.main-brands a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  var oldArrowsClass = ".slider-navigation.brand." + $(e.relatedTarget).attr("data-arrows-container"); // previous active tab
  var newArrowsClass = ".slider-navigation.brand." + $(e.target).attr("data-arrows-container"); // previous active tab
  var newSliderName = ".brand-slider." + $(e.target).attr("data-arrows-container"); // previous active tab

  $(oldArrowsClass).css("display", "none");
  $(newArrowsClass).css("display", "flex");
  $(newSliderName).slick('setPosition',0);
});

$('.navbar-toggler.nav_mobile_button').on('click', function (e) {
  $(this).toggleClass("active");
});

$(".rc-btn").on('click',function(e){
  $(".fixtop").removeClass('fixtop');
  $('body,html').animate({scrollTop: 0 }, 50);

});
$(".filter-mobile-btn").on('click',function(e){
$(".filter-container, .filter-form, .filter-top-groupe, .filter-top-groupe2, .breadcrumb, .row.h").addClass('fixtop');

});
$("body").on('click','.filrers label.radio',function(e){
  var v=  e.currentTarget.children[0].value;
  var n=  e.currentTarget.children[0].name;
  $('form.filter-form input[name="'+n+'"]').each(function(ind,el){
    if (el.value==v){ el.checked=false};
  });
  $(e.currentTarget).remove();

});
$(".filrers .items .show-more").on('click',function(e){
  e.preventDefault();
  $(e.currentTarget).siblings().each(function(ind,el){
    $(el).click();
  });
});

//============ Оформление Заказа =========================

$(".how__getting input[name='getting__type']").on('change',function(){

  if ($(this).attr("value") == 'pickup') {
    $("#collapse_courier").collapse('hide');
    $("#collapse_pickup").collapse('show');
    $(".how__getting.courier").removeClass("dm");

  } else {
    $("#collapse_pickup").collapse('hide');
    $("#collapse_courier").collapse('show');
    $(".how__getting.courier").addClass("dm");

  }
});


$(".how__getting.prime a").on('click',function(e){
  e.preventDefault();
  $(e.currentTarget).parent().find('input[type="radio"]').prop("checked",true);
  $("#collapse_courier").collapse('hide');
});


$(".how__getting.courier a").on('click',function(e){
  e.preventDefault();
  var inp = $(e.currentTarget).parent().find('input[type="radio"]');
  
  if($(inp).prop("checked")){ 
   $("#collapse_courier").collapse('show'); 
  } else {
      $(inp).prop("checked",true);
      $("#collapse_courier").collapse('show'); 
  }
});
$(".how__getting.variant a").on('click',function(e){
  e.preventDefault();
  $(e.currentTarget).parent().siblings().removeClass('red');
  $(e.currentTarget).parent().addClass('red');
  $(e.currentTarget).parent().find('input[type="radio"]').prop("checked",true);
});

$(".delivery__date > div").on('click',function(e){
  e.preventDefault();
  $(e.currentTarget).siblings().removeClass('red');
  $(e.currentTarget).addClass('red');
  $(e.currentTarget).find('input[type="radio"]').prop("checked",true);
  if (!$(e.currentTarget).hasClass('ds')){
    if ($(e.currentTarget).siblings(".other").hasClass('ds')){
      $('#other__delivery__date').datepicker().value("");
      $(e.currentTarget).siblings(".other").removeClass('ds');
    }
  };

});

$('.tab__head .nav-link').on('shown.bs.tab', function (e) {
  var newTabId = $(e.target).attr("id"); // previous active tab

  if (newTabId==="entity-tab") {
    $(".summary__order").addClass("ur");
  } else {
    $(".summary__order").removeClass("ur");
  }

});


//============ Оформление Заказа Конец =========================

//================= Фильтр на странице Поиск ==================
$(".sort__item input[type='radio']").on('change',function(){
  var gr=$(this).prop('name');
  $(".sort__item input[name='"+gr+"']").parent().removeClass("b");

  if ($(this).prop('checked')) {
    $(this).parent().addClass("b")
  } else {
    $(this).parent().removeClass("b")
  }

});
//================= Фильтр на странице Поиск Конец ============

//================= Популярные запросы в строке поиска ========
$('input[name="serch__query"]').on("focus", function(){
  var agw = parseInt($(".search__tooptip").parent().find('.nav-item.dropdown').width())+"px";

    $(".search__tooptip").removeClass('dn');
    $(".search__tooptip .search__add2garazh").css('width',agw);

});
$('input[name="serch__query"]').on("blur", function(){
  var agw = $(".search__tooptip").parent().find('.nav-item.dropdown').width()+"px";

    $(".search__tooptip").addClass('dn');
    $(".search__tooptip .search__add2garazh").attr('style', ''); // Именно УДАЛИТ свойство style

});

//================= Популярные запросы в строке поиска Конец ==


$("form.filter-form #clear_filters").on('click',function(e){
  $('form.filter-form input[type="radio"]').each(function(ind,el){
    el.checked=false;
  });
  $('form.filter-form input[type="text"]').each(function(ind,el){el.value='';});
  $('form.filter-form input.range').each(function(ind,el){
    $(el).bootstrapSlider('refresh');
    var descr= $(el).parent().siblings(".range-description");
    var s=el.value.split(',');    
    descr.children(".range-min").text(formatStr(s[0]));
    descr.children(".range-max").text(formatStr(s[1]));
  });

});

$('form.filter-form input[type="radio"]').on('change',function(e){
  var n=e.currentTarget.name;
    $('.filrers .items input[name="'+n+'"]').each(function(ind,el){
      $(el.parentElement).remove();
    });

    $(".filrers .items .show-more").before($(e.target.parentElement).clone());
});

$('.view-list-btn').on('click',function(e){
  e.preventDefault();
  if (!$('.content-section').hasClass('list')){
    $('.content-section').addClass('list');
    $(this).addClass("bl");
    $('.view-title-btn').removeClass("bl");
  }

});
$('.view-title-btn').on('click',function(e){
  e.preventDefault();
  $('.content-section').removeClass('list');
  $(this).addClass("bl");
  $('.view-list-btn').removeClass("bl");
});

$('a[href^="#reply-form-"]').on('click', function (e) {
  var formId = $(this).attr('href');//.substring(1);
  var sib = $(this).parent().siblings('.name');
  var ssize=$(this).parent().siblings('.name').length;

  if ($(this).parent().siblings('.name').length) {
    $(formId).find('textarea').val($(this).parent().siblings('.name').text()+', ');
  } else {
    var s= $(this).parent().parent().siblings('.avatar-block').children('.name').text();
    
    $(formId).find('textarea').val(s+', ');

  }

});


// $(window).resize(function() {
$(window).on('load resize', function(){
  if ($(window).width()<992) {
      $('.menu-catalog.desk .dropdown-menu.submenu').attr('style',''); // удаляем класс у мобильного меню
      $('.menu-catalog.desk .dropdown-menu.submenu').removeClass('show'); // удаляем класс у мобильного меню
      $('.menu-catalog.desk').removeClass('show'); // удаляем класс у мобильного меню

    if (!$("#filter-accordion .filter-block").hasClass("card")) {
      $("#filter-accordion .filter-block").addClass("card");
      $("#filter-accordion .filter-block .card-body").attr("data-parent","#filter-accordion");
    }
    
    $(".filter-form").collapse('hide');    

  }  else {
        if ($("#filter-accordion .filter-block").hasClass("card")) {
      $("#filter-accordion .filter-block").removeClass("card");
      $("#filter-accordion .filter-block .card-body").attr("data-parent","");
    }

  } 

  if ($(window).width()<768) {
      $('.main-products .nav-tabs a[href="#all-prod"]').tab('show'); 
  }
  // if ($(window).width()<576) {
  if ($(window).width()<480) {
      $('.main-products .tab-content').addClass('list'); 
  } else {
      $('.main-products .tab-content').removeClass('list'); 
  }

});

// ================== Плавающая Кнопка Вверх =============================
// $(window).on('load resize', function(){
//   var r=($(window).width()-$('.container').width())/2 + "px";
//   $('#back-to-top').css("right", r);
// });

// // При прокрутке страницы, показываем или срываем кнопку
//     $(window).scroll(function () {
//         // Если отступ сверху больше 50px то показываем кнопку "Наверх"
//         if ($(this).scrollTop() > 3*$(window).innerHeight()/4) {
//             $('#back-to-top').fadeIn();
//         } else {
//             $('#back-to-top').fadeOut();
//         }
//     });
    
    // При нажатии на кнопку мы перемещаемся к началу страницы 
    $('#back-to-top').click(function () {
        $('body,html').animate({scrollTop: 0 }, 500);
        return false;
    });




$('.main-menu .nav-item.dropdown').on('show.bs.dropdown', function () { setMenuContainerParams(this);});


//===== Показ-Скрытие подменю На Десктопе ====================
$('.desk .mcatalog-content .dropdown-submenu').on('mouseenter', function(event) {
      event.preventDefault(); 
      event.stopPropagation(); 
      // Задаем размеры и позицию меню
      setSumMenuContainerParams(this);
     // Скрываем лишнее и Показываем меню
      $(this).siblings().removeClass('show');
      $(this).siblings().children('.dropdown-menu').removeClass('show');
      $(this).toggleClass('show');
      $(this).children('.dropdown-menu').toggleClass('show');
    }).on('mouseleave', function(e){
     event.stopPropagation(); 
      event.preventDefault(); 
      $(this).siblings().removeClass('show');
      $(this).siblings().children(".dropdown-menu").removeClass('show');
      $(this).toggleClass('show');
      $(this).children('.dropdown-menu').toggleClass('show');
  });
  
  $('.main-menu li.nav-item.dropdown').on('mouseenter', function(e){
    e.stopPropagation();
    e.preventDefault();
    $(this).children('.dropdown-toggle').dropdown('toggle');
  });
  $('.main-menu li.nav-item.dropdown').on('mouseleave', function(e){
    if ($(this).children('.dropdown-menu').is(':visible')) {
     e.stopPropagation();
     e.preventDefault();
    $(this).children('.dropdown-toggle').dropdown('toggle');
  }
  });

//===== Показ-Скрытие подменю На Мобильных ====================
     $('.mob .dropdown-submenu [data-toggle=dropdown]').on('click', function(event) {
      event.preventDefault(); 
      event.stopPropagation(); 
      showMobMenu(this);
     });
 
    // $('.navbar-nav > .dropdown-submenu [data-toggle=dropdown]').on('click',function(event) {
    $('.navbar-nav > .add2garazh [data-toggle=dropdown]').on('click',function(event) {
      event.preventDefault(); 
      event.stopPropagation(); 
      showMobMenu(this);
     });
//    );

//===== Показ-Формы поиска на моиблке ====================
    $('.top-search-btn').on('click', function(event) {
      event.preventDefault(); 
      event.stopPropagation(); 

      if ($('.main-search-form').hasClass('hide_item')){
              $('.main-search-form').addClass('bounceInRight');
              $('.main-search-form').toggleClass('hide_item');
              $('.navbar-brand.logo').toggleClass('hide_item');
              $('.navbar-toggler').toggleClass('hide_item');
              $('.main-search-form button').toggleClass('hide_item');
              setTimeout( function(){ $('.main-search-form').removeClass('bounceInRight'); }, 1000);
      } else {
              $('.main-search-form').addClass('bounceOutRight');
              setTimeout( function(){ 
                          $('.main-search-form').removeClass('bounceOutRight'); 
                          $('.main-search-form').toggleClass('hide_item');
                          $('.navbar-brand.logo').toggleClass('hide_item');
                          $('.navbar-toggler').toggleClass('hide_item');
                          $('.main-search-form button').toggleClass('hide_item');
              }, 500);
      }
      $(this).toggleClass('hide_item');
    });


$('#navMenuContent').on('show.bs.collapse', function () {
  $('.menu-catalog .dropdown-menu.submenu').addClass('show');
  $('.mob').find('.dn').removeClass('dn');

})
$('#navMenuContent').on('hide.bs.collapse', function () {
  $('#navMenuContent').find('.dn').each(function(i,ob){ $(ob).removeClass('dn'); });
  $('#navMenuContent').find('.show').each(function(i,ob){ $(ob).removeClass('show'); });

})

$('.main-menu .mob .dropdown-item').click(function() {
  $(this).closest('.nav-item').find('.show').removeClass('show');
  $(this).closest('.collapse').collapse('hide');
  $('.navbar-toggler').removeClass('active');
  $('.navbar-toggler').removeClass('collapsed');
  window.location = $(this).attr('href');
});

$('.main-menu .add2garazh .dropdown-item').click(function(e) {
  e.preventDefault(); 
  e.stopPropagation(); 
  var obj=$(this).closest('.add2garazh').children('.dropdown-toggle');  
  showMobMenu(obj);
  window.location = $(this).attr('href');
});

});
