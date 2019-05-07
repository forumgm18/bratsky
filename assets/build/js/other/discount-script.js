// слайдер
$('.sale__list').slick({
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
