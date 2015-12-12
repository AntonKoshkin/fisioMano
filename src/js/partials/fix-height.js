// this code makes contacts__item--right block same height as contacts__item--left block

var hei = $('.contacts__item--left').outerHeight() + 5;		// put the height of left block to variable (plus 5px)
$('.contacts__item--right').css('height', hei);					// make the height of right block equals to the left

// if we change width of browser height of block can change

$(window).resize(function(event) {									// so lets watch for width of viewport
	var hei = $('.contacts__item--left').outerHeight() + 5;	// and do the same
	$('.contacts__item--right').css('height', hei);
});