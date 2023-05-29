nowjs = require ("now")

app = express.createServer()
everyone = nowjs.initialize(app)

everyone.now.getPlayerList = (callback) ->
	players = ['jake', 'John', 'Cathy']
	callback(players)