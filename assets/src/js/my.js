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
        { breakpoint: 1200, settings: { slidesToShow: 5 } },
        { breakpoint: 1000, settings: { slidesToShow: 4 } },
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
        { breakpoint: 1200, settings: { slidesToShow: 5 } },
        { breakpoint: 1000, settings: { slidesToShow: 4 } },
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
        { breakpoint: 1200, settings: { slidesToShow: 5 } },
        { breakpoint: 1000, settings: { slidesToShow: 4 } },
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
        { breakpoint: 1200, settings: { slidesToShow: 5 } },
        { breakpoint: 1000, settings: { slidesToShow: 4 } },
        { breakpoint: 992,  settings: { slidesToShow: 3 } },
        { breakpoint: 768,  settings: { slidesToShow: 2 } },
        { breakpoint: 500,  settings: { slidesToShow: 1 } }
      ]    
  });

//=========== Слайдер картинок в карточке товара ========================
$('.card_slider_for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.card_slider_nav'
});
$('.card_slider_nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.card_slider_for',
  dots: false,
  // centerMode: false,
  focusOnSelect: true,
  centerMode: true,
  centerPadding: '0px',
});
//=======================================================================

$('.slider_for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider_nav'
});

$('.slider_nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider_for',
  dots: false,
  arrows: false,
  centerMode: true,
  centerPadding: '0px',
  focusOnSelect: true
});









$('.sale__list').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  prevArrow: $('.prev-slider'),
  nextArrow: $('.next-slider'),
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
        variableWidth: false
      }
    }
  ]
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
  

function update_popper(refEl, popperId, plcmnt, pdng, x, y) {
        
        new Popper(refEl, $(popperId), {
            // placement: 'bottom',
            placement: plcmnt,
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
                    // enabled: false,
                    padding: pdng,
                    escapeWithReference: false,
                    // boundariesElement:'viewport'
                    // boundariesElement:'window'
                    // boundariesElement:'.top-panel'
                },
                // KeepTogether: {enabled: false}
                // computeStyle: {
                //   x: 'top',
                //   y: 'right',
                // }

            },
        });
      // Popper.scheduleUpdate();

    }

function popoversHide() {
  $("#basket_items").hide();
  $("#add2Favorites").hide();
  $(".atf_active").removeClass("atf_active");
  $("body").removeClass("scroll_off");

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
  update_popper($(this), "#add2Favorites",'bottom', 10, -115, 10);

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
    e.preventDefault();
  e.stopPropagation()

  update_popper($(this), "#basket_items", 'top', 0, -236, 0);

  if ($(this).hasClass("atf_active")) {
    $("#basket_items").hide();
    $(this).removeClass("atf_active");
  } else {
    $("#basket_items").show();
    $(this).addClass("atf_active");
    $("body").addClass("scroll_off");

  }

});
$("#basket_items .red-btn").on('click', function(e) {
  e.preventDefault();
  popoversHide(); 
});    

// $('#basket_items').on('mouseover', function (e) {
//     e.stopPropagation();
// });    

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
      $('.favorites__list').addClass('list'); 
  } else {
      $('.main-products .tab-content').removeClass('list'); 
      $('.favorites__list').removeClass('list'); 
  }

$('.slider_for').slick('setPosition');

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

  $('#SHOW-EDIT-MY-DATA').click(function () {
    $('.my-data__details').css("display", "none");
    $('.my-data__form').css("display", "flex");
    $('.my-data__file-photo').css("display", "block");
  });

$(".personal-menu__item").on('click',function(e){
  var lab=$(this).attr("data-label");
  var dl= "[data-label=" + lab + "]";
  $('section '+dl).addClass('d-block').siblings().removeClass('d-block');
  $('h1 '+dl).addClass('d-block').siblings().removeClass('d-block');
  $(this).addClass('active').siblings().removeClass('active');;
});

$(".garage__del-all").on('click',function(e){
  $(".garage__item input[type=checkbox]").prop("checked",true);
});

  $('.answers__show-more').click(function () {
    $(this).parent().children('div.answers__spoiler').toggleClass("answers__show");
    $(this).children('span.filter__icon').toggleClass("arrow-icon_up");
    return false;
  });


// Скрыть всплывающее меню нажатием на другое место документа 
$(document).mouseup(function (e) { // событие клика по веб-документу
  var div = $('.filter__evaluation'); // класс элемента
  if (!div.is(e.target) // если клик был не по блоку
    &&
    div.has(e.target).length === 0) { // и не по его дочерним элементам
    $("#EVALUATION-CHECK").prop("checked",false);
  }
  
  var div = $('.filter__date'); // класс элемента
  if (!div.is(e.target) // если клик был не по блоку
    &&
    div.has(e.target).length === 0) { // и не по его дочерним элементам
    $("#DATE-CHECK").prop("checked",false);
  }
});

$(document).mouseup(function (e) { // событие клика по веб-документу
  var div = $('.sort__repair'); // класс элемента
  if (!div.is(e.target) // если клик был не по блоку
    &&
    div.has(e.target).length === 0) { // и не по его дочерним элементам
    $("#SORT-REPAIR").prop("checked",false);
  } 
});


});

// страница akb_master
// Первый слайдер
$('.akb_master_page_slider-h').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.prevH'),
  nextArrow: $('.nextH')
});

// Наши услуги, слайдер
$('.akb_master_page_services__list').slick({
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  variableWidth: true,
  prevArrow: $('.prev-service'),
  nextArrow: $('.next-service'),
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


// Слайдер отзывов
$('.akb_master_page_slider-review').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.prev-review'),
  nextArrow: $('.next-review')
});

// страница cat_maslo
$(document).ready(function () {
  $('#MASLO-INPUTS-FILTER').click(function () {
    var masloRadioVal = $('input[name="maslo_type"]:checked').val();
    $('.maslo_appointment-filter').hide(); // Назначение (Все, Автомобили, Грузовики, комбайны, трактора)
    $('.maslo_oil-type-filter').hide(); // Тип масла (Все, 2Т, 4Т, Моторное)
    $('.maslo_viscosity-filter').hide(); // Вязкость (0W-16)
    $('.maslo_manufacturer-filter').hide(); // Производитель (ENI)
    $('.maslo_composition-filter').hide(); // Состав (Синтетическое)
    $('.maslo_engine-type-filter').hide(); // Тип двигателя (Бензиновый)
    $('.maslo_specification-acea-filter').hide(); // Спецификация ACEA (А1/В1)
    $('.maslo_specification-api-filter').hide(); // Спецификация API (CB, CC)
    $('.maslo_specification-oem-filter').hide(); // Спецификация OEM (BMW Longlife-01 FE)
    $('.maslo_brand-filter').hide(); // Бренд (Castrol, AMSOIL)
    $('.maslo_specification-filter').hide(); // Спецификации (BMW LongLife-01 FE)
    $('.maslo_access-filter').hide(); // Допуски (Allison C-3, Allison C-4)
    $('.maslo_color-filter').hide(); // Цвет (Желтый, Зеленый)
    $('.maslo_specification-2-filter').hide(); // Спецификация (DOT 3, DOT 4)
    $('.maslo_brand-2-filter').hide(); // Бренд (Ниагара, Полярник)
    $('.maslo_class-filter').hide(); // Класс (ОЖ-К (концентрат), ОЖ-40)

    switch (masloRadioVal) {
      case 'maslo_grease':
        $('.maslo_appointment-filter').show(); // Назначение (Все, Автомобили, Грузовики, комбайны, трактора)
        $('.maslo_oil-type-filter').show(); // Тип масла (Все, 2Т, 4Т, Моторное)
        $('.maslo_viscosity-filter').show(); // Вязкость (0W-16)
        $('.maslo_manufacturer-filter').show(); // Производитель (ENI)
        $('.maslo_composition-filter').show(); // Состав (Синтетическое)
        $('.maslo_engine-type-filter').show(); // Тип двигателя (Бензиновый)
        $('.maslo_specification-acea-filter').show(); // Спецификация ACEA (А1/В1)
        $('.maslo_specification-api-filter').show(); // Спецификация API (CB, CC)
        $('.maslo_specification-oem-filter').show(); // Спецификация OEM (BMW Longlife-01 FE)
        break;
      case 'fluid':
        $('.maslo_brand-filter').show(); // Бренд (Castrol, AMSOIL)
        $('.maslo_specification-filter').show(); // Спецификации (BMW LongLife-01 FE)
        $('.maslo_access-filter').show(); // Допуски (Allison C-3, Allison C-4)
        break;
      case 'antifreeze':
        $('.maslo_brand-filter').show(); // Бренд (Castrol, AMSOIL)
        $('.maslo_specification-filter').show(); // Спецификации (BMW LongLife-01 FE)
        $('.maslo_access-filter').show(); // Допуски (Allison C-3, Allison C-4)
        $('.maslo_color-filter').show(); // Цвет (Желтый, Зеленый)
        break;
      case 'tosol':
        $('.maslo_brand-2-filter').show(); // Бренд (Ниагара, Полярник)
        $('.maslo_class-filter').show(); // Класс (ОЖ-К (концентрат), ОЖ-40)
        break;
      case 'brake_fluid':
        $('.maslo_brand-2-filter').show(); // Бренд (Ниагара, Полярник)
        $('.maslo_specification-2-filter').show(); // спецификация (DOT 3, DOT 4)
        break;
    }
  })
});

// страница cat-spare_parts
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
  $('.cat-spare_parts_classifier__list').hide(); // Скрыть 1 список 
  $('.cat-spare_parts_classifier__list2').show(); // Показать 2 список
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
  $('.cat-spare_parts_classifier__list2').hide(); // Скрыть 2 список 
  $('.cat-spare_parts_classifier__list3').show(); // Показать 3 список
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
  $('.cat-spare_parts_classifier__list3').hide(); // Скрыть 3 список 
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


// страница comparison
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
$('.comparison__list_slider').slick({
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
  $('.comparison_table__spoiler-body').hide()
  $('.comparison_table__spoiler-check').click(function () {
    $(this).parent().toggleClass("folded").toggleClass("unfolded").next().toggle('normal');
    $(this).toggleClass("open-position");
  })
});

// При нажатии на кнопку "Очистить список"
// Удалить все товары с списке сравниваемых товаров
$(document).ready(function () {
  $('.comparison__clean-list').click(function () {
    $('.comparison__list_slider').remove();
    $('.comparison_slider-arrows').remove();
  })
});


// *******************************************
// Закрепить/Открепить список сравниваемых товаров
jQuery(document).ready(function ($) {
  // Если браузер не мобильный, работаем
  var
    $window = $(window), // Основное окно
    $target = $(".comparison__fixed"), // Блок, который нужно фиксировать при прокрутке
    $target2 = $('.comparison__list_slider'),
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


// страница discount 
// слайдер
$('.discount_sale__list').slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  variableWidth: true,
  prevArrow: $('.prev-slider'),
  nextArrow: $('.next-slider'),
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