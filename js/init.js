(function($){
  $(function(){

    $('.button-collapse').sideNav();

    $('.datepicker').pickadate({
	    selectMonths: true, // Creates a dropdown to control month
	    selectYears: 15 // Creates a dropdown of 15 years to control year
	});

    $('select').material_select();

	$('.switch label input').click(function() {
	  if ($('nav').hasClass("red")) {
	  	$('nav').removeClass("red accent-1");
	  	$('body').removeClass("red accent-1");
	  }
	  else {
	  	$('nav').addClass("red accent-1");
	  	$('body').addClass("red accent-1");
	  	$('#modo-pelea').show('slow');
		}
	});

	$('#modo-pelea .card-action a').click(function() {
		$('#modo-pelea').hide('slow');
	});

	$('.col').click(function() {
	  if ($('nav').hasClass("red")) {
	  	Materialize.toast('Primero sal del Modo Pelea', 4000);
	  }
	});


  }); // end of document ready
})(jQuery); // end of jQuery name space