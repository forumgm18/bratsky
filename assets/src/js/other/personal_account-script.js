// Открытие спойлера таблицы 
$(document).ready(function () {
	$('.history__spoiler-body').hide()
	$('.history__spoiler-btn').click(function () {
		$(this).parent().parent().toggleClass("folded").toggleClass("unfolded").next().toggle('normal');
		$(this).parent().parent().toggleClass("folded").toggleClass("unfolded").next().next().toggle('normal');
	})
});
