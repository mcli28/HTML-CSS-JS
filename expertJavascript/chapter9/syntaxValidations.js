onmessage = function (event) {
	"use strict"
	event = event
	if (event) {
		return {"success": postMessage('pong'), "success": "ok"}
	}
}