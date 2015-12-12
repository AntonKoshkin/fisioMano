// this code makes main menu collapse

$('#collapseButton, .main-menu').on('click', function(event) {		// on button click
	$('#collapseMenu').toggleClass('main-menu--open');					// add/remove class of opening
});

// this code makes border-bottom to fixed menu

$(window).scroll(function(event) {							// when we scroll
	var scrollPos = $(this).scrollTop();					// position to variable
	if (scrollPos >= 662) {										// if it is more then 662
		$('.header').addClass('header--bordered');		// add border
	} else {															// and if it's not
		$('.header').removeClass('header--bordered');	// remove border
	}
});