
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mysql = require('mysql');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

function BD () {
  var cliente = mysql.createConnection({
    user: 'root',
    password: '',
    host: 'localhost',
    port: 3306,
    database: 'ninjacode'
  });
  cliente.connect();
  return cliente;
}

function login(req, res, next) {
  if (req.session.user) {
    next();
  }else{
    res.redirect('/login');
  }
}

app.get('/', routes.index);
app.get('/users', user.list);

app.get('/login', function (req, res) {
  res.render('login', {title: 'ingreso'});
});

app.get('/privada', login, function (req, res) {
  res.render('privada', {title: 'pagina privada'});
});

app.post('/autenticar', function (req, res) {
  var objBD = BD();
  var user = req.body.txtUsuario;
  var clave = req.body.txtClave;
  objBD.query('select * from usuario where alias like "'+user+'" and clave like "'+clave+'" ', function function_name (error, resultado, fila) {
    if (!error) {
      console.log(resultado.length);
      if (resultado.length > 0) {
        req.session.user = user;
        res.redirect('/privada');
      } else{
        res.send('el usuario no existe o sus datos son incorrectos.');
      }
    }else{
      console.log('error');
    }
  });
  /*if (req.body.txtUsuario == 'stuy' && req.body.txtClave == '123456'){
    req.session.user = req.body.txtUsuario;
    res.redirect('/privada');
  }else{
    res.send('INGRESO FALLIDO: datos incorrectos');
  }*/
});

app.get('/salir', login, function (req, res) {
  delete req.session.user;
  res.redirect('/');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
