// Открытие спойлера таблицы 
$(document).ready(function () {
	$('.table__spoiler-body').hide()
	$('.table__spoiler-btn').click(function () {
		$(this).parent().parent().toggleClass("folded").toggleClass("unfolded").next().toggle('normal');
		$(this).parent().parent().toggleClass("folded").toggleClass("unfolded").next().next().toggle('normal');
	})
});

// При нажатии на кнопку "Изменить данные":
// - скрыть данные о пользователе,
// - показать форму с полями для заполнения личных данных,
// - добавить возможность загрузить фото на аватар (показать label)
$(document).ready(function () {
	$('#SHOW-EDIT-MY-DATA').click(function () {
		$('.my-data__details').css("display", "none");
		$('.my-data__form').css("display", "grid");
		$('.my-data__file-photo').css("display", "block");
	})
});
