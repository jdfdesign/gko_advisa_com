//= require jquery
//= require jquery_ujs
//= require gko/public/jquery.grid.responsive.js
//= require twitter/bootstrap/transition.js
//= require twitter/bootstrap/alert.js
//= require twitter/bootstrap/button.js
//= require twitter/bootstrap/carousel.js
//= require twitter/bootstrap/collapse.js
//= require twitter/bootstrap/dropdown.js
//= require twitter/bootstrap/modal.js
//= require jquery.throttledresize.js


var $window,$body,contentApi, breakPoint, isTouch;

var Site = {
	
	init: function() {
		$window.on("throttledresize", Site.resize);
	/*	$('.nav li.dropdown').on('click.dropdown.data-api', function (e) {
			if ($window.width() > breakPoint) {
				e.preventDefault();
				e.stopPropagation();
				var url = $(this).find('a:first').attr("href");
				window.location = "http://" + window.location.hostname + url;
				return false;
			}
		}) */
		Site.resize;
	},
	
	resize: function() {
		

	}
}

$(document).ready(function() {
	$window = $(window);
	$body = $("body");
	isTouch = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;
	breakPoint = 979;
	
	Site.init();
});