;

var Q = function(query) { 
	return document.querySelectorAll(query);
}

Q.prototype.hasClass = function(classToFind) {
	var el = this;
	return (el[0].getAttribute('class').indexOf(classToFind) > 0);
}

var lines = 5;
for (n = 0; n < lines; n++) {
	var line = $('<div>').attr('class', 'line-'+(n+1));
	$('header').eq(0).prepend(line);
}

if ($('body').hasClass('portfolio')) {
	randomizeColors(3);
}

// apply random color classes to thumbnails
$.fn.randomizeColors = function(num){
	this.each(function(){
		var n;
		function rand(){	
			var r = Math.round(Math.random()*num);
			if (r < 1) r++;
			return r;
		}
		n = rand();
		$(this).addClass('color-'+n);
	});
}

function toggleInfo(){
	var _this = this;
	$(_this).siblings('.info').add(_this).toggleClass('active');
	var icon = $(_this).children('i').eq(0);
	icon.toggleClass('icon-cancel icon-info-circled');
}

$('.info-button').on('click', toggleInfo);

$('.open-menu').on('click', function(e){
	e.preventDefault();
	$(this).toggleClass('active');
	$('.wrap').toggleClass('open');
	$(this).children('i').eq(0).toggleClass('icon-menu icon-angle-circled-up');
});


