// Set zepto as dependency
; define(['zepto'], function(){

	// Set randomized color class based on number passed
	$.fn.randomColorClass = function(num){
		return this.each(function(){
			$(this).addClass('color-'+ Math.round(Math.random()*(num-1)) );
		});
	}

	// Info icon toggles display of information on an entry
	function toggleInfo(){
		var _this = this;
		$(_this).siblings('.info').add(_this).toggleClass('active');
		var icon = $(_this).children('i').eq(0);
		icon.toggleClass('icon-cancel icon-info-circled');
	}

	// Dynamically add diagonal lines on every page
	var lines = 5;
	for (n = 0; n < lines; n++) {
		var line = $('<div>').attr('class', 'line-'+(n+1));
		$('header').eq(0).prepend(line);
	}

	// Actions to take if on portfolio entries page
	if (appData.currentPage = "portfolio") {
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

});
