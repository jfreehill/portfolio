require.config({
	paths: {
		'zepto': [ 
			// CDN
			"//cdnjs.cloudflare.com/ajax/libs/zepto/1.0/zepto.min", 
			// Local fallback
			"lib/zepto.js"
		]
	}
})

require(['behavior']);