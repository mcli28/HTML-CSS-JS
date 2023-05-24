// var utils = {};

// ball.x = ball.x + 5;

// ball.x += 5;

// var dx = mouse.x – ball.x,
// dy = mouse.y – ball.y,
// ax = dx * spring,
// ay = dy * spring;
// vx += ax;
// vy += ay;
// vy += gravity;
// vx *= friction;
// vy *= friction;
// ball.x += vx;
// ball.y += vy;
// ball.draw(context)

// while (true) {
// ball.x += 1;
// }

// function drawFrame () {
// ball.x += 1;
// ball.draw(context);
// }
// window.setInterval(drawFrame, 1000/60);

// (function drawFrame () {
// 	window.requestAnimationFrame(drawFrame, canvas);
// 	//animation code...
// }());

// if (!window.requestAnimationFrame) {
// 	window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
// 	window.mozRequestAnimationFrame ||
// 	window.oRequestAnimationFrame ||
// 	window.msRequestAnimationFrame ||
// 	function (callback) {
// 		return window.setTimeout(callback, 1000/60);
// 	});
// }

// var arr = [1, 2, 3];
// arr.forEach(function (element, i) {
// console.log(element);
// });

// element.addEventListener(type, handler [, useCapture]);

// canvas.addEventListener('mousedown', function (event) {
// console.log("Mouse pressed on element!");
// }, false);

// element.removeEventListener(type, handler [, useCapture]);

// utils.captureMouse = function (element) {
// 	var mouse = {x: 0, y: 0};
// 	element.addEventListener('mousemove', function (event) {
// 		var x, y;
// 		if (event.pageX || event.pageY) {
// 			x = event.pageX;
// 			y = event.pageY;
// 		} else {
// 			x = event.clientX + document.body.scrollLeft +
// 			document.documentElement.scrollLeft;
// 			y = event.clientY + document.body.scrollTop +
// 			document.documentElement.scrollTop;
// 		}

// 		x -= element.offsetLeft;
// 		y -= element.offsetTop;

// 		mouse.x = x;
// 		mouse.y = y;

// 	}, false);

// 	return mouse;
// }

// var canvas = document.getElementById('canvas'),
// mouse = utils.captureMouse(canvas);

utils.captureTouch = function (element) {
	var touch = {x: null, y: null, isPressed: false};
	element.addEventListener('touchstart', function (event) {
		touch.isPressed = true;
	}, false);
	element.addEventListener('touchend', function (event) {
		touch.isPressed = false;
		touch.x = null;
		touch.y = null;
	}, false);
	element.addEventListener('touchmove', function (event) {
		var x, y,
		touch_event = event.touches[0]; //first touch
		if (touch_event.pageX || touch_event.pageY) {
			x = touch_event.pageX;
			y = touch_event.pageY;
		} else {
			x = touch_event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			y = touch_event.clientY + document.body.scrollTop +	document.documentElement.scrollTop;
		}
		x -= offsetLeft;
		y -= offsetTop;
		touch.x = x;
		touch.y = y;
	}, false);
	return touch;
}

textarea.focus();
textarea.addEventListener('keydown', function (event) {
console.log(event.type);
}, false);