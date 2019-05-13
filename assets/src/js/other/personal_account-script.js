// Открытие спойлера таблицы 
$(document).ready(function () {
	$('.table__spoiler-body').hide()
	$('.table__spoiler-btn').click(function () {
		$(this).parent().parent().toggleClass("folded").toggleClass("unfolded").next().toggle('normal');
		$(this).parent().parent().toggleClass("folded").toggleClass("unfolded").next().next().toggle('normal');
	})
});
