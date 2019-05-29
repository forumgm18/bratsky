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
	})
});