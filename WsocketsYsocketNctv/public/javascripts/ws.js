/*** WEBSOCKET ***/
var websocket = io.connect('http://127.0.0.1:3001');

websocket.on('mensaje', function (data) {
	console.log(data.m);
});


$(document).on('ready', function() {
	$('#btnEnviar').click(function () {
		websocket.emit('enviarServidor',
			{m: $('#txtMensaje').val() });
		$('#txtMensaje').val('')
	});
	websocket.on('enviarCliente', function (data) {
		$('div#mensajes').apppend(data.m.m + '<br>');
		console.log(data.m);
	});
	websocket.emit('recibir', function (data) {
		$('div#mensajes').apppend(data.m.m + '<br>');
	});
});
