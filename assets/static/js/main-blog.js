;(function () {

	'use strict';


	var mainMenuSticky = function() {

		var sticky = $('.js-sticky');

		sticky.css('height', sticky.height());
		$(window).on('resize', function(){
			sticky.css('height', sticky.height());
		});

		var $section = $('.fh5co-main-nav');

		$section.waypoint(function(direction) {

		  	if (direction === 'down') {

			    	$section.css({
			    		'position' : 'fixed',
			    		'top' : 0,
			    		'width' : '100%',
			    		'z-index' : 99999
			    	}).addClass('fh5co-shadow');;
			}

		}, {
	  		offset: '0px'
		});

	};




	// Document on load
	$(function(){

		mainMenuSticky();

	});


}());