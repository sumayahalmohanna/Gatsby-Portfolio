$(document).ready(function(){

  //$('img').src = "../img/Doodle/3Dme.jpg";
  $('image').ready(function(){
    src = "../img/Doodles/3Dme.jpg";   
  })

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
				}, 1000);
            return false;
			}
		}
	});

  $(window).resize(function(){
    
    if($(window).width() <= 991)
    {
      $('#carousel').removeClass('col-xs-4 col-sm-4 col-md-4');
      $('#carousel').addClass('col-xs-12 col-sm-12 col-md-12');
      $('#grow').removeClass('col-xs-8 col-sm-8 col-md-8');
      $('#grow').addClass('col-xs-12 col-sm-12 col-md-12');
    }

    if ($(window).width() <= 450)
    {
      $('#top').removeClass('row');
      $('.gimmeRows').addClass('row');
      $('.about, .resume, .contact').removeClass('col-xs-4 col-sm-4 col-md-4');
      $('.about, .resume, .contact').addClass('col-xs-12 col-sm-12 col-md-12');
    }
    //refresh page
    location.reload();
  });
  
});