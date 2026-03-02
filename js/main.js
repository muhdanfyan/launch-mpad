$(window).load(function () {
	$('.preloader').fadeOut('slow');
});


/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSite() {

	"use strict";

	//OUTLINE DIMENSION AND CENTER
	(function () {
		function centerInit() {

			var sphereContent = $('.sphere'),
				sphereHeight = sphereContent.height(),
				parentHeight = $(window).height(),
				topMargin = (parentHeight - sphereHeight) / 2;

			sphereContent.css({
				"margin-top": topMargin + "px"
			});

			var heroContent = $('.hero'),
				heroHeight = heroContent.height(),
				heroTopMargin = (parentHeight - heroHeight) / 2;

			heroContent.css({
				"margin-top": heroTopMargin + "px"
			});

		}

		$(document).ready(centerInit);
		$(window).resize(centerInit);
	})();

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


$('#countdown').countdown({
	date: "March 03, 2026 18:07:00 GMT+0800",
	render: function (data) {
		var el = $(this.el);
		el.empty()
			.append("<div><strong>" + this.leadingZeros(data.days, 1) + "</strong><span>Hari</span></div>")
			.append("<div><strong>" + this.leadingZeros(data.hours, 2) + "</strong><span>Jam</span></div>")
			.append("<div><strong>" + this.leadingZeros(data.min, 2) + "</strong><span>Menit</span></div>")
			.append("<div><strong>" + this.leadingZeros(data.sec, 2) + "</strong><span>Detik</span></div>");
	}
});