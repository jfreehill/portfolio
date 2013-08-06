;

if ($('body').hasClass('portfolio')) {
	renderEntryData(portfolio.data);
}

function renderEntryData (data) {
	if (typeof data !== "object") return;
	var entryTemplate = doT.template(document.getElementById('entryTemplate').text);
	var entryRender = entryTemplate(data);
	$('section.entries').html(entryRender);
	viewRender();
}

function viewRender(){
	$('.entry .info').each(function(){
		var n;
		function rand(){	
			var r = Math.round(Math.random()*4);
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

