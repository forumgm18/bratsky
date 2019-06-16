// Открытие спойлера таблицы 
$(document).ready(function () {
// 	$('.table__spoiler-body').hide()
// 	$('.table__spoiler-btn').click(function () {
// 		$(this).parent().parent().toggleClass("folded").toggleClass("unfolded").next().toggle('normal');
// 		$(this).parent().parent().toggleClass("folded").toggleClass("unfolded").next().next().toggle('normal');
// 	});

// При нажатии на кнопку "Изменить данные":
// - скрыть данные о пользователе,
// - показать форму с полями для заполнения личных данных,
// - добавить возможность загрузить фото на аватар (показать label)
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


});
