$(document).ready(function() {

	// ** Start use of strict
	
	"use strict";

	// ** Navigation bar collapse on scroll

	$('#navbar-affix').affix({
	    offset: {
			top: 100
		}
	});

	// ** Smooth scrolling

	$("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (1000) specifies the number of milliseconds it takes to scroll to the specified area.
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1000, function(){

				// Add hash (#) to end of the URL when done scrolling 
				window.location.hash = hash;

		    });
		}
	
	});
});