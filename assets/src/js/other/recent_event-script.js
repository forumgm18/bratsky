// Скрыть всплывающее меню нажатием на другое место документа 
$(document).mouseup(function (e) { // событие клика по веб-документу
	var div = $('.percount__wp'); // класс элемента
	if (!div.is(e.target) // если клик был не по блоку
		&&
		div.has(e.target).length === 0) { // и не по его дочерним элементам
		$("#PERCOUNT-CHECK").removeAttr("checked");
	}
});

// Открытие спойлера
$(document).ready(function () {
	$('.feedback__show-more').click(function () {
		$(this).parent().children('div.feedback__spoiler').toggleClass("feedback__show");
		$(this).children('span.filter__icon').toggleClass("arrow-icon_up");
		return false;
	});
});