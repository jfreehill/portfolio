;

define(['zepto'], function(){

	var lines = 5;
	for (n = 0; n < lines; n++) {
		var line = $('<div>').attr('class', 'line-'+(n+1));
		$('header').eq(0).prepend(line);
	}

	if ($('body').hasClass('portfolio')) {
		viewRender();
	}

	function viewRender(){
		$('.entry .info').each(function(){
			var n;
			function rand(){	
				var r = Math.round(Math.random()*3);
				if (r < 1) r++;
				return r;
			}
			n = rand();
			$(this).addClass('color-'+n);
		});
		$('.info-button').on('click', toggleInfo);
	}

	function toggleInfo(){
		var _this = this;
		$(_this).siblings('.info').add(_this).toggleClass('active');
		var icon = $(_this).children('i').eq(0);
		icon.toggleClass('icon-cancel icon-info-circled');
	}

	$('.open-menu').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.wrap').toggleClass('open');
		$(this).children('i').eq(0).toggleClass('icon-menu icon-angle-circled-up');
	});
	
});
