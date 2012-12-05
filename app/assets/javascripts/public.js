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


var $window,$body,contentApi, breakPoint, isTouch, currentTheme;

var Site = {
	
	init: function() {
		$window.on("throttledresize", Site.resize);
		$('.nav li.dropdown').on('click.dropdown.data-api', function (e) {
			if ($window.width() > breakPoint && !$body.hasClass('center')) {
				e.preventDefault();
				e.stopPropagation();
				var url = $(this).find('a:first').attr("href");
				window.location = "http://" + window.location.hostname + url;
				return false;
			}
		})
		Site.resize;
		
		$("#themes").css({
			'position': 'fixed',
			'top': 0,
			'left': 0
		}).find('a').css({
			'display': 'block',
			'background': 'black',
			'color': 'white'
		}).on('click', function(e) {
			var $this = $(this),
				theme = $this.attr('data-theme');
				
			if(typeof currentTheme != undefined) {
				$body.removeClass(currentTheme);
			}
			if(typeof theme != undefined) {
				$body.addClass(theme);
			}	
			
			currentTheme = theme;
		})
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