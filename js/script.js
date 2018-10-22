$(document).ready(function(){
	
	var windowHeight = window.outerHeight;

	
	$('#arrowDown, #arrowDown-small').click(function() {
		window.scrollBy({
			top: windowHeight,
			left: 0,
			behavior: 'smooth'
		});
	});
	
	$('#arrowUp, #arrowUp-small').click(function() {
		window.scrollBy({
			top: -windowHeight,
			left: 0,
			behavior: 'smooth'
		});
	});
	
	$('#btn-plane, #btn-plane-small').click(function() {
		window.scrollBy({
			top: 9000000,
			left: 0,
			behavior: 'smooth'
		});
	});

});