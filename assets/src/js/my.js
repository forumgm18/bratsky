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
        { breakpoint: 575,  settings: { slidesToShow: 1 } }
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
        { breakpoint: 575,  settings: { slidesToShow: 1 } }
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
        { breakpoint: 575,  settings: { slidesToShow: 1 } }
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
        { breakpoint: 575,  settings: { slidesToShow: 1 } }
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

//================== Плагин выбора даты ===================

$('#date-service').datepicker({
        locale: 'ru-ru',
        format: 'dd mmm yyyy'
    });

$(".filter-block .card-body .add-scroll").overlayScrollbars({ resize: "none" });

//$("#capacity").slider();
//$("#capacity").bootstrapSlider();
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
  e.preventDefault;
  $(e.currentTarget).siblings().each(function(ind,el){
    $(el).click();
  });
});

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
  if (!$('.content-section').hasClass('list')){
    $('.content-section').addClass('list');
  }

});
$('.view-title-btn').on('click',function(e){
  $('.content-section').removeClass('list');
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
  if ($(window).width()<576) {
      $('.main-products .tab-content').addClass('list'); 
  } else {
      $('.main-products .tab-content').removeClass('list'); 
  }

//  $('#back-to-top').offset({});
});

// function setBackToTopOffset() {
//   var containerW = $(".container").width();
//   var bw= $('#back-to-top').width();
//   ($(window).innerWidth()-containerW)/2;    

// }

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
  // $('.menu-catalog .dropdown-menu.submenu').removeClass('show');
  $('#navMenuContent').find('.dn').each(function(i,ob){ $(ob).removeClass('dn'); });
  $('#navMenuContent').find('.show').each(function(i,ob){ $(ob).removeClass('show'); });
  // $('.add2garazh .show').each(function(i,ob){ $(ob).removeClass('show'); });

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
//========== Открытие меню при наведении ==================
// $(function() {
//   function onNavbar() {
//     if (window.innerWidth >= 768) {
//       $('.main-menu .navbar-nav .dropdown').on('mouseover', function(){
//         setMenuContainerParams(this);
//       //        $('.dropdown-toggle', this).next('.dropdown-menu').show();
//         $('.dropdown-toggle', this).next('.dropdown-menu').addClass('show');
//         if (!$(this).hasClass('desk')){ $('.desk').removeClass('show'); }
//       }).on('mouseout', function(){
//       //        $('.dropdown-toggle', this).next('.dropdown-menu').hide();
//         if (!$(this).hasClass('desk')){
//           $('.dropdown-toggle', this).next('.dropdown-menu').removeClass('show');
//         }
//       });

//       $('.dropdown-toggle').click(function() {
//       //        if ($(this).next('.dropdown-menu').is(':visible')) {
//         if ($(this).next('.dropdown-menu').hasClass('show')) {
//           window.location = $(this).attr('href');
//         }
//       });
//     } else {
//       //      $('.navbar-default .dropdown').off('mouseover').off('mouseout');
//       $('.navbar-nav .dropdown').off('mouseover').off('mouseout');
//     }
//   }


  //   function onCatalog() {
   
  // if ($(window).width()>991) {
    
  //   $('.desk .dropdown-submenu [data-toggle=dropdown]').on('mouseover', function(event) {

  //     // Задаем размеры и позицию меню
  //     $(this).siblings('.dropdown-menu').css('height', $(this).closest('.mcatalog-content').height() - 3 + 15 );                 // 3px толщина border-top
  //     $(this).siblings('.dropdown-menu').css('width', $(this).closest(".mcatalog").width()-$(this).closest('.mcatalog-content').width() - 30 - 15 ); // 30px поля col
  //     $(this).siblings('.dropdown-menu').css('left', $(this).closest('.mcatalog-content').width()  );                        // 15px ширина эффекта тени
  //     $(this).siblings('.dropdown-menu').css('top', -$(this).parent().position().top );                           // 15px ширина эффекта тени
  // } else {
  //     $(this).siblings('.dropdown-menu').attr('style','');

  // }    
  //     // Скрываем лишнее и Показываем меню
  //     $(this).parent().siblings().removeClass('show');
  //     $(this).parent().siblings().children(".dropdown-menu").removeClass('show');
  //     $(this).parent().toggleClass('show');
  //     $(this).next().toggleClass('show');
  //   });

//   $(window).resize(function() { onNavbar();});
//   onNavbar();
// });



// //при нажатии на ссылку
// $(".navbar-collapse a").click(function() {
//   //если она не имеет класс dropdown-toggle
//   if (!$(this).hasClass("dropdown-toggle")) {
//     //то закрыть меню
//     $(".navbar-collapse").collapse('hide');
//   }
// });
// setTimeout( function(){
//         elem.removeClass(effect);
//     }, 1000);
// //========== Открытие меню при наведении ==================
// $(function() {
//   function onNavbar() {
//     if (window.innerWidth >= 768) {
//       $('.navbar .dropdown').on('mouseover', function(){
//         $('.dropdown-toggle', this).next('.dropdown-menu').show();
//       }).on('mouseout', function(){
//         $('.dropdown-toggle', this).next('.dropdown-menu').hide();
//       });
//       $('.dropdown-toggle').click(function() {
//         if ($(this).next('.dropdown-menu').is(':visible')) {
//           window.location = $(this).attr('href');
//         }
//       });
//     } else {
//       $('.navbar-default .dropdown').off('mouseover').off('mouseout');
//     }
//   }
//   $(window).resize(function() {
//     onNavbar();
//   });
//   onNavbar();
// });
// //при нажатии на ссылку
// $(".navbar-collapse a").click(function() {
//   //если она не имеет класс dropdown-toggle
//   if (!$(this).hasClass("dropdown-toggle")) {
//     //то закрыть меню
//     $(".navbar-collapse").collapse('hide');
//   }
// });
// setTimeout( function(){
//         elem.removeClass(effect);
//     }, 1000);
