// this code makes smooth scroll to #

$('a[href^="#"]').on('click', function(e){									// all links with attribute starts with "#"
		e.preventDefault();															// cancel default action
		if ($(this).attr('href').length > 1) {									// if href is not just "#"
			point = $(this).attr('href');											// put the links way to the variable
			coord = $(point).offset().top - 55									// put its position to the variable (minus fixed menu height)
			$('html,body')																// choose the document
				.stop()																	// if we have scroll animation now - stop it
				.animate({																// and make animation of scroll
					scrollTop: coord													// to this position
				}, 1000);																// in this time
		}
	});