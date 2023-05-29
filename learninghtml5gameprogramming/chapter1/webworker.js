var socket = new WebSocket('ws://websockets.org:8787/echo');
socket.onopen = function (evt) { console.log("Socket opened");}
socket.onclose = function (evt) { console.log("Socket closed");}
socket.onmessage = function (evt) { console.log(evt.data);}
socket.onerror = function (evt) { console.log("Error: "+evt.data);}
socket.send("Hello World!");

setInterval(function () {
	postMessage(new Date());
}, 2000);
