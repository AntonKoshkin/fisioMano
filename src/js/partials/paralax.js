// this code makes simple parallax effect

$(window).scroll(function(event) {						// when scroll
	var a = $(window).scrollTop()/2;						// half of scroll heigth put to variable
	
	$('.promo').css({											// choose our promo
		backgroundPosition: ['center ' + a + 'px'],	// add background position
	});
});