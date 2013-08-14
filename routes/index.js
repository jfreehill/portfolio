
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
	var fs = require('fs');
	var file ='./data/portfolio.json';
	var jsonData;

	fs.readFile(file, 'utf8', function(err, data){
		if (err) { 
			console.log('Error: ' + err); 
			return;
		}
		jsonData = JSON.parse(data);
		res.render('portfolio', {
			data: jsonData, 
			slug: "portfolio", 
			title: "Portfolio"
		});
	});
};

exports.lab = function(req, res){
	res.render('portfolio', {
			//data: jsonData, 
			slug: "lab", 
			title: "Portfolio"
		});
};