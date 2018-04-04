$(function() {
	$('#hamburger').on('click', function() {
		$('nav').slideToggle();
	});

	$(window).on('resize', function() {
		if ($(window).width() >= 768 && !$('nav').is(':visible')) {
			$('nav').hide();
		} else if ($(window).width() < 768 && $('nav').is(':visible')) {
			$('nav').show();
		}
	});
});