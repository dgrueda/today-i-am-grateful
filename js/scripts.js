$(function () {
	$('#send-gratitude').on('click', function () {
		var reason = $('#reason').val();
		console.log('sended reason: ' + reason);
	});

	$('#reason').change(function () {
		console.log('changed');
		
	});

	$('#reason').on('keypress', function (event) {
		if ($(this).val().length > 1) {
		  	// Shows the submit button
		  	$('#send-gratitude').fadeIn(300);
		  	// Press enter
			if (event.which === 13) {
				event.preventDefault();
				$('#send-gratitude').trigger('click');
			}
		} else {
			$('#send-gratitude').fadeOut(100);
		} 
	});
});