// this code makes main menu collapse

$('#collapseButton, .main-menu').on('click', function(event) {		// on button click
	var c = $('.main-menu__list').height();								// height of list to variable
	if ($('.main-menu').height() == 0) {									// if menu is closed
		$('.main-menu').animate({height: c}, 500);						// open it
	} 	else {																		// if it's not
		$('.main-menu').animate({height: 0}, 500);						// close
	};
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