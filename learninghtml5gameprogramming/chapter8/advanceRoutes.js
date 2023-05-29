express = require 'express'
app = express.createServer()
sys = require 'sys'
app.configure ->
	app.use express.logger() 
	app.use express.cookieParser()
	app.use express.bodyParser()
	app.use express.static(__dirname + '/public')

app.get '/about', (req, res) ->
	res.send('About Page')

app.get '/about/:id', (req, res) ->
	id = req.params.id
	res.send('About Page for' + id)

app.get '/profile/:id?', (req, res) ->
	id = req.params.id
	if (id is undefined)
		res.send("Profile not found")
	else res.send(id + "'s Profile")

app.get "/getTime", (req, res) ->
	util.log "Client visited /getTime"
	res.render 'getTime', context: {timezone: 'America/Los Angeles'}

app.post '/updateProfile', (req, res) ->
	newData = req.body
	name = req.body.name
	doStuffWithData(data)
	res.send("Update successful.")

sys.puts "Server started on http://localhost:3000"

app.listen(3000);
