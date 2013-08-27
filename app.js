
/**
 * Module dependencies.
 */
var config = require('./config');

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

var oneDay = 86400000;

// all environments


app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view cache', true);

app.use(express.favicon());
app.use(express.compress());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public'), { maxAge: oneDay }));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
 // app.locals.pretty = true;
}

//app.get('/', function(req, res) {});
app.get('/', routes.index);
app.get('/portfolio', routes.portfolio);
app.get('/lab', routes.lab);
//app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
