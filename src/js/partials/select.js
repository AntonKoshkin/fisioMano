// this code makes custom select

$('.cont-form__selection').on('click', function(event) {						// click on pseudoselect
	$('.cont-form__options').toggleClass('cont-form__options--open');		// open/close options
});

$('.cont-form__radio').on('click', function(event) {							// click on option
	var index = $(this).attr('value');												// puts its value to the variable
	$('.cont-form__select').attr('value', index);								// puts options value to the pseudoselect
	$('.cont-form__options').toggleClass('cont-form__options--open');		// and close options
});