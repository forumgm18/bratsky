// Скрыть всплывающее меню нажатием на другое место документа 
$(document).mouseup(function (e) { // событие клика по веб-документу
	var div = $('.sort__repair'); // класс элемента
	if (!div.is(e.target) // если клик был не по блоку
		&&
		div.has(e.target).length === 0) { // и не по его дочерним элементам
		$("#SORT-REPAIR").prop("checked",false);
	} 
});