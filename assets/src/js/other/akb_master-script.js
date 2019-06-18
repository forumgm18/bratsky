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
