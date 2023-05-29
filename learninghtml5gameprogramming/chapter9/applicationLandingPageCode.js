doctype 5
html ->
	head ->
		title "#{@title || 'nowjs demo'}"
		script src: '/nowjs/now.js'

	body ->
	@title = 'Game Lobby'
	div style: 'float:left; height: 600px; width:800', ->
	div style: 'float:right;', ->
		textarea id:'chat', rows:'10', columns:'50', style:'width:200px; height:550px'
		br ->
		input type:'text', columns:'40', id:'message'
		input type:'button', value:'Send',
			onclick:"distributeMessage($('#message').get(0).value)"
			