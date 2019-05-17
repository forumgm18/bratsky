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