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


var $window,$body,contentApi, isOverBreakPoint;

var Site = {
	
	init: function() {
		$("a#member-access").data('remote', true)
		.on('ajax:beforeSend', function(event, xhr, settings) {
			
		}).on('ajax:complete', function(evt, xhr, status) {

        });
	}
}

$(document).ready(function() {
	Site.init();
});