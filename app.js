
/**
 * Module dependencies.
 */
var config = require('./config');

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
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

app.use(lessMiddleware({
	src: path.join(__dirname, 'src/less'),
	dest: path.join(__dirname, 'public/assets/css'),
	prefix: '/assets/css',
	force: ('development' == app.get('env')),
	compress: true
}));
app.use(express.favicon());
app.use(express.compress());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public'), { maxAge: oneWeek }));

// development only
if ('development' == app.get('env')) {
	app.use(express.logger('dev'));
  	app.use(express.errorHandler());
  	app.locals.pretty = true;
  	app.set('view cache', false);
}

fs.readFile(appDataFile, 'utf8', function(err, data){
	if (err) { 
		console.log('Error: ' + err); 
		return;
	}
	app.locals.appData = JSON.parse(data);

	http.createServer(app).listen(app.get('port'), function(){
  		console.log('Express server listening on port ' + app.get('port') + ' w/ environment: ' + app.get('env'));
		console.log(path.join(__dirname, 'src/less'));
	});
});

app.get('/', routes.index);
app.get('/portfolio', routes.portfolio);
app.get('/portfolio/:item', routes.portfolio_item);
app.get('/lab', routes.lab);
app.get('/about', routes.about);

app.get('/test', function(req, res){
	res.send(app.locals.appData);
});
app.get('/route-test', routes.route_test);
