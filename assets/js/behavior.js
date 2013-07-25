;

$('.entry .info').each(function(){
	var n;
	function rand(){	
		var r = Math.round(Math.random()*4);
		if (r < 1) r++;
		return r;
	}
	n = rand();
	$(this).addClass('color-'+n);
	
})

$('.info-button').on('click', toggleInfo);

function toggleInfo(){
	var _this = this;
	$(_this).siblings('.info').add(_this).toggleClass('active');
	var icon = $(_this).children('i').eq(0);
	var iconClass =  (icon.hasClass('icon-cancel')) ? 'icon-info-circled' : 'icon-cancel';
	icon.removeClass().addClass(iconClass);

	// if ($(_this).hasClass('active')) {
	// 	setTimeout(function(){
	// 		toggleInfo.apply(_this);
	// 	} , 4000);
	// }
}