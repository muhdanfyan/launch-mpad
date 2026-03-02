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