$(window).load(function () {
	$('.preloader').fadeOut('slow');
});


/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSite() {

	"use strict";

	// Init effect 
	$('#scene').parallax();

};
/* END ------------------------------------------------------- */

/* =Document Ready Trigger
-------------------------------------------------------------- */
$(window).load(function () {

	initializeSite();
	(function () {
		setTimeout(function () { window.scrollTo(0, 0); }, 0);
	})();

});
/* END ------------------------------------------------------- */


const targetDate = new Date("March 03, 2026 18:07:00 GMT+0800");

function checkAndRedirect() {
	if (new Date() >= targetDate) {
		window.location.href = 'show.html';
	}
}

$('#countdown').countdown({
	date: targetDate,
	render: function (data) {
		var el = $(this.el);
		el.empty()
			.append("<div><strong>" + this.leadingZeros(data.days, 1) + "</strong><span>Hari</span></div>")
			.append("<div><strong>" + this.leadingZeros(data.hours, 2) + "</strong><span>Jam</span></div>")
			.append("<div><strong>" + this.leadingZeros(data.min, 2) + "</strong><span>Menit</span></div>")
			.append("<div><strong>" + this.leadingZeros(data.sec, 2) + "</strong><span>Detik</span></div>");

		// Fallback check on every render
		checkAndRedirect();
	},
	onfinish: function () {
		checkAndRedirect();
	}
});

// Initial check and periodic fallback
checkAndRedirect();
setInterval(checkAndRedirect, 1000);

/* =Fullscreen Toggle
-------------------------------------------------------------- */
$('#fullscreen-toggle').on('click', function () {
	if (!document.fullscreenElement &&    // alternative standard method
		!document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // current working methods
		if (document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
		} else if (document.documentElement.msRequestFullscreen) {
			document.documentElement.msRequestFullscreen();
		} else if (document.documentElement.mozRequestFullScreen) {
			document.documentElement.mozRequestFullScreen();
		} else if (document.documentElement.webkitRequestFullscreen) {
			document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		}
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
	}
});

$(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange', function () {
	var icon = $('#fullscreen-toggle i');
	if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
		icon.removeClass('fa-expand').addClass('fa-compress');
	} else {
		icon.removeClass('fa-compress').addClass('fa-expand');
	}
});