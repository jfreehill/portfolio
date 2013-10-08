
var querySrc =  [ 
	'lib/zepto.min',
	'//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min'
	],
	queryLibrary = ('__proto__' in {}) ? querySrc[0] : querySrc[1];


require.config({
	paths: {
		'query_library': queryLibrary
	}
})

require(['behavior']);