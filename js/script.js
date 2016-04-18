$(document).ready(function(){
	
	var offset = 300, offsetOpacity = 1200, scrollTopDuration = 700, $back_to_top = $('.top');
	
	$(window).scroll(function() {
		
		($(this).scrollTop() > offset) ? $back_to_top.addClass('top-is-visible') : $back_to_top.removeClass('top-is-visible top-fade-out');
		
		if($(this).scrollTop() > offsetOpacity)
		{
			$back_to_top.addClass('top-fade-out');
		}
	});
	
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scrollTopDuration
		);
	});

	//generate qoute.
	$("form").submit(function() {

		event.preventDefault();
  		
  		//variables
  		var err = document.getElementById('error');
  		var pageNum = document.getElementById('textinput').value;
  		var qoute = 0;
  		var outputPrice = document.getElementById("qoute");
  		
  		err.style.visibility = "hidden";
		
		//validate input
		if(pageNum == null || pageNum === "" || pageNum < 0)
		{
			//write message
			err.style.visibility = "visible";
		}
		else {
			//calculate qoute
			qoute = qoute + (pageNum * 200); //price per page

			if(document.getElementById('cbRD').checked)
			{
				qoute = qoute + 500;
			}
			if(document.getElementById('cbSEO').checked)
			{
				qoute = qoute + 100;
			}
			if(document.getElementById('cbWP').checked)
			{
				qoute = qoute + 50;
			}
			if(document.getElementById('cbUXD').checked)
			{
				qoute = qoute + 300;
			}
			if(document.getElementById('cbGM').checked)
			{
				qoute = qoute + 300;
			}
			if(document.getElementById('cbLD').checked)
			{
				qoute = qoute + 200;
			}
			outputPrice.innerHTML = "$"+qoute;
		}
	});

});