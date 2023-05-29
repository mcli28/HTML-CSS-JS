express = require 'express'
app = express.createServer()
sys = require 'sys'

app.configure ->
	app.use (express.cookieParser())
	app.use (express.bodyParser())
	app.use (express.session({secret:'asdf'}))

app.get '/', (req, res) ->
	if req.session.visitCount == undefined
		req.session.visitCount = 1
	else
		req.session.visitCount = req.session.visitCount + 1;
		res.send "Session ID:" + req.session.id + "<br/>" + 'you have visited this page' + req.session.visitCount + 'times';
		