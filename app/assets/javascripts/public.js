//= require jquery
//= require jquery_ujs
//= require gko/public/jquery.grid.responsive.js
//= require twitter.bootstrap.2.2.1/bootstrap/transition.js
//= require twitter.bootstrap.2.2.1/bootstrap/alert.js
//= require twitter.bootstrap.2.2.1/bootstrap/button.js
//= require twitter.bootstrap.2.2.1/bootstrap/carousel.js
//= require twitter.bootstrap.2.2.1/bootstrap/collapse.js
//= require twitter.bootstrap.2.2.1/bootstrap/tab.js
//= require twitter.bootstrap.2.2.1/bootstrap/dropdown.js
//= require twitter.bootstrap.2.2.1/bootstrap/modal.js
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