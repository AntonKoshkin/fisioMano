// this code makes tabs in comments

$('.pazient__dot').on('click', function(event) {					// when we click the circle
	$('.pazient__dot').removeClass('pazient__dot--checked');		// remove "rounder" class from all of circles
	$(this).addClass('pazient__dot--checked');						// and add to clicked circle
	
	var ind = $(this).attr('data-id');									// put the data-id of circle to the variable

	$('.pazi-item')															// find all tabs
		.removeClass('pazi-item--active')								// remove active class from each of them
		.eq(ind)																	// find the one equales our circle
		.addClass('pazi-item--active');									// and add it active class
});