
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

//app.get('/', routes.index);
app.get('/', function (req, res) {
  var user = {
    nombre: 'daniela',
    apellidos: 'balcas ocampo',
    direccion: 'random',
    amis_face: '3254'
  }
  res.render('index.jade', {title: 'User', user: user});
});
app.get('/users/:id', function (req, res) {
  res.send('mostrar contenido para user id' + req.params.id);  
});
//app.post('/', function (req, res) {
//  res.send(req.body);
//});
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});