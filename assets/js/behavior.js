;

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