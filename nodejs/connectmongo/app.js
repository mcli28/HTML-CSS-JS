
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost/mistareas');
  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;

  var Tarea = new Schema({
    tarea: String
  });

  var Tarea = mongoose.model('Tarea', Tarea);

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

app.get('/', routes.index);
app.get('/users', user.list);
//app.get('/tareas', function (req, res) {
//  res.render('tareas/index', {title: 'vista index lista tareas'});
//});
app.get('/tareas', function (req, res) {
  Tarea.find({}, function (err, docs) {
    res.render('tareas/index',{
      title: 'vista index lista de tareas',
      docs: docs
    });
  });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
