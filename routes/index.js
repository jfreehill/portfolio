/* Home Page */
exports.index = function(req, res){
	res.render('index', {
		slug: "home", 
		title: "Web Designer & Developer"
	});
};

/* Portfolio Pages */
exports.portfolio = function(req, res){
	res.render('portfolio', {
		slug: "portfolio", 
		title: "Portfolio"
	});
};

exports.portfolio_item = function(req, res){
	var requestedItem = req.params.item;
	var entries = req.app.locals.appData.entries;
	var found = false;

	// check if requested slug is found in entries
	// set found to entry index if exists
	for (var i = 0; i < entries.length; i++) {
		if (requestedItem == entries[i].slug)
			found = i;
	}

	// if slug is not found, redirect to 404; else send to page with entry data
	if (found === false) {
		res.send("Four-Oh-Four Bro", 404);
	} else {
		res.locals.entry = entries[found];
		// pass in previous and next entry slugs if possible
		if (found > 0)
			res.locals.prevEntry = entries[found-1].slug;
		if (found < entries.length-1)
			res.locals.nextEntry = entries[found+1].slug;

		res.render('single-entry', {
			slug: "single-entry",
			title: requestedItem
		});
	}
};

exports.lab = function(req, res){
	res.render('portfolio', {
		//data: jsonData, 
		slug: "lab", 
		title: "Experiments"
	});
};
exports.about = function(req, res){
	res.render('about', {
		//data: jsonData, 
		slug: "about", 
		title: "About"
	});
};


exports.route_test = function(req, res){
	//res.send(req.app.locals.appData);
};