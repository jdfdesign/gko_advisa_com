//= require jquery
//= require jquery_ujs
//= require gko/public/jquery.grid.responsive.js
//= require twitter.bootstrap.2.3.1/bootstrap/transition.js
//= require twitter.bootstrap.2.3.1/bootstrap/alert.js
//= require twitter.bootstrap.2.3.1/bootstrap/button.js
//= require twitter.bootstrap.2.3.1/bootstrap/carousel.js
//= require twitter.bootstrap.2.3.1/bootstrap/collapse.js
//= require twitter.bootstrap.2.3.1/bootstrap/tab.js
//= require twitter.bootstrap.2.3.1/bootstrap/dropdown.js
//= require twitter.bootstrap.2.3.1/bootstrap/modal.js
//= require jquery.throttledresize.js


var $window,$body, breakPoint, isTouch, currentTheme;

var Site = {
	
	init: function() {
    $('.carousel').carousel({
      interval: 2000
    })
	}
}

$(document).ready(function() {
	Site.init();
});