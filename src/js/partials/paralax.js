// this code makes simple parallax effect

$(window).scroll(function(event) {						// when scroll
	var a = $(window).scrollTop()/2;						// half of scroll heigth put to variable
	var b = $(window).scrollTop()/3;
	$('.promo').css({												// choose our promo
		backgroundPosition: ['center ' + a + 'px'],		// add background position
		padding: [(120 + b) + 'px 0 ' + (205 - b) + 'px']
	});
});