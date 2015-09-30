
/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , url = require('url')
  , fs = require('fs')
  , lessMiddleware = require('less-middleware');

var appDataFile ='./data/portfolio.json';
var app = express();

var oneDay = 24 * 60 * 60 * 1000;
var oneWeek = oneDay * 7;


// all environments

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view cache', true);


// development only

if ('development' == app.get('env')) {
	//app.use(express.logger('dev'));
  	app.use(express.errorHandler());
  	app.locals.pretty = true;
  	app.set('view cache', false);
}

app.locals({
    year: new Date().getFullYear()
});

// Set middleware, etc.
app.use(lessMiddleware({
	src: path.join(__dirname, 'src/less'),
	dest: path.join(__dirname, 'public/css'),
	prefix: '/css',
	force: ('development' == app.get('env')),
	compress: true
}));
// Pass current url to locals
app.use(function(req, res, next){
	app.locals.url = req.protocol + "://" + req.get('host');
	app.locals.path = req.path;
	next();
});
app.use(express.favicon());
app.use(express.compress());
app.use(express.static(path.join(__dirname, 'public'), { maxAge: oneWeek }));
app.use(app.router);

// Define routes

app.get('/', routes.index);
app.get('/portfolio', routes.portfolio);
app.get('/portfolio/:item', routes.portfolio_item);
app.get('/lab', routes.lab);
app.get('/about', routes.about);

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  res.send('404 Yo!', 404);
});

// Load JSON data to memory and start server

fs.readFile(appDataFile, 'utf8', function(err, data){
	if (err) { 
		console.log('Error: ' + err); 
		return;
	}
	app.locals.appData = JSON.parse(data);
	
	//console.log(req.protocol + "://" + req.get('host') + req.url);
	http.createServer(app).listen(app.get('port'), function(){
  		console.log('Express server listening on port ' + app.get('port') + ' w/ environment: ' + app.get('env'));
		console.log(path.join(__dirname, 'src/less'));
	});
});