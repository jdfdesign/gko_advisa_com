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


var $window,$body, breakPoint, isTouch, currentTheme;

var Site = {
	
	init: function() {
		$window.on("throttledresize", Site.resize);
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