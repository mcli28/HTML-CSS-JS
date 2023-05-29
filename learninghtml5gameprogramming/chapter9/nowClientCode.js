doctype 5
html ->
	head ->
		title "#{@title || 'nowjs demo'}"
		script src: '/nowjs/now.js'

	body ->
	coffeescript ->
		window.getPlayers = ->
			now.getPlayerList (data) ->
				console.log(data)

		now.ready ->
			console.log('ready')
	div ->
		input type: 'button', value: 'Get Players', onclick: 'getPlayers();'
		