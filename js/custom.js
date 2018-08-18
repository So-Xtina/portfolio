$(document).ready(function() {
	// ** Start use of strict

	"use strict";

	// ** Navigation bar collapse on scroll

	$("#navbar-affix").affix({
		offset: {
			top: 100
		}
	});

	// ** Smooth scrolling

	$("a").on("click", function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (1000) specifies the number of milliseconds it takes to scroll to the specified area.
			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top
				},
				1000,
				function() {
					// Add hash (#) to end of the URL when done scrolling
					window.location.hash = hash;
				}
			);
		}
	});

	$(".mailer").on("click", sendMail);

	function sendMail() {
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();

		var options = {
			url: "../php_mailer/mail_handler.php",
			method: "POST",
			dataType: "JSON",
			data: {
				name,
				email,
				message
			},
			beforeSend: function() {
				$(".messageTxt").text("Processing...");
			},
			success: function(data) {
				console.log("The Mailer Response: ", data);

				$(".messageTxt").text("Your message has been sent!");

				clearInputs();
			},
			failure: function(err) {
				console.log("The Mailer Error: ", err);

				$(".messageTxt").text("Your message could not be sent, please try again later");
			}
		};

		$.ajax(options);
	}

	function clearInputs() {
		$("#name").val("");
		$("#email").val("");
		$("#message").val("");
	}
});
