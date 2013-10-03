
/*
 * GET home page.
 */

// exports.index = function(req, res){
//   res.render('index', { title: 'Express' });
// };

exports.index = function(req, res){
	res.render('index', {
		slug: "home", 
		title: "Web Designer & Developer"
	});
};

exports.portfolio = function(req, res){
	res.render('portfolio', {
		slug: "portfolio", 
		title: "Portfolio"
	});

};

exports.portfolio_item = function(req, res){
	var fs = require('fs');
	var file ='./data/portfolio.json';
	var jsonData;

	res.render('portfolio', {
		slug: "portfolio", 
		title: "Portfolio"
	});
};

exports.lab = function(req, res){
	res.render('portfolio', {
			//data: jsonData, 
			slug: "lab", 
			title: "Experiments"
		});
};

exports.route_test = function(req, res){

};