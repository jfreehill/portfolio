// Set zepto as dependency
; define(['query_library'], function(){

	// Set randomized color class based on number passed
	$.fn.randomColorClass = function(num){
		return this.each(function(){
			$(this).addClass('color-'+ Math.round(Math.random()*(num-1)) );
		});
	}

	// Info icon toggles display of information on an entry
	function toggleInfo(){
		var $this = $(this);
		$this.siblings('.info').add(_this).toggleClass('active');
		var icon = $this.children('i').eq(0);
		icon.toggleClass('icon-cancel icon-info-circled');
	}

	// Dynamically add diagonal lines on every page
	var lines = 0;
	for (n = 0; n < lines; n++) {
		var line = $('<div>').attr('class', 'line-'+(n+1));
		$('header').eq(0).prepend(line);
	}

	// Actions to take if on portfolio entries page
	if (appData.currentPage == "portfolio") {
		$('.entry .info').randomColorClass(3);
		$('.info-button').on('click', toggleInfo);
	}

	// Functionality of menu on mobile device
	$('.open-menu').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.wrap').toggleClass('open');
		$(this).children('i').eq(0).toggleClass('icon-menu icon-angle-circled-up');
	});	

	/* jQuery Contra v1.0
	 * http://jonraasch.com/blog/jquery-contra-plugin
	 *
	 * Copyright (c) 2009 Jon Raasch (http://jonraasch.com/)
	 * Licensed under the MIT License (see http://dev.jonraasch.com/contra/docs#licensing)
	 */
	(function(a){a.contra=function(e,d){function c(f){if(f==d.code[b]){b++;if(b>=d.code.length){e()}}else{b=0}}if(typeof e!="function"){return false}var b=0,d=d||{};d.scope=d.scope||a(document);d.code=d.code||[38,38,40,40,37,39,37,39,66,65,13];d.scope.keyup(function(f){c(f.which||f.keyCode)})};a.fn.contra=function(c,b){var b=b||{};b.scope=a(this);a.contra(c,b)}})(window.jQuery || window.Zepto);
	$.contra(function(){
		$('html').toggleClass('EXTREME');
	}, {
		code: [
			77,
			69,
			84,
			65,
			76
		]
	});
});
