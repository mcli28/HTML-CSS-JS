// var radians = Math.atan(dy / dx);
// radians = degrees * Math.PI / 180
// degrees = radians * 180 / Math.PI

function utils () {
}

utils.captureMouse = function (element) {
	var mouse = {x: 0, y: 0};
	element.addEventListener('mousemove', function (event) {
		var x, y;
		if (event.pageX || event.pageY) {
			x = event.pageX;
			y = event.pageY;
		} else {
			x = event.clientX + document.body.scrollLeft +
			document.documentElement.scrollLeft;
			y = event.clientY + document.body.scrollTop +
			document.documentElement.scrollTop;
		}

		x -= element.offsetLeft;
		y -= element.offsetTop;

		mouse.x = x;
		mouse.y = y;

	}, false);

	return mouse;
}

// var dx = x2 – x1,
// dy = y2 – y1,
// dist = Math.sqrt(dx * dx + dy * dy);

// Calculate basic trigonometric functions
// sine of angle = opposite / hypotenuse
// cosine of angle = adjacent / hypotenuse
// tangent of angle = opposite / adjacent
// Convert radians to degrees and degrees to radians
// radians = degrees * Math.PI / 180
// degrees = radians * 180 / Math.PI
// Rotate to the mouse (or any point)
// //substitute mouse.x, mouse.y with the x, y point to rotate to
// dx = mouse.x – object.x;
// dy = mouse.y – object.y;
// object.rotation = Math.atan2(dy, dx) * 180 / Math.PI;
// Create waves
// // assign value to x, y or other property of an object,
// // use as drawing coordinates, etc.
// (function drawFrame () {
// window.requestAnimationFrame(drawFrame, canvas);
// value = center + Math.sin(angle) * range;
// angle += speed;
// }());
// Create circles
// //assign position to x and y of object or drawing coordinate
// (function drawFrame () {
// window.requestAnimationFrame(drawFrame, canvas);
// xposition = centerX + Math.cos(angle) * radius;
// yposition = centerY + Math.sin(angle) * radius;
// angle += speed;
// }());
// Create ovals
// //assign position to x and y of object or drawing coordinate
// (function drawFrame () {
// window.requestAnimationFrame(drawFrame, canvas);
// xposition = centerX + Math.cos(angle) * radiusX;
// yposition = centerY + Math.sin(angle) * radiusY;
// angle += speed;
// }());
// Get the distance between two points
// //points are x1, y1 and x2, y2
// //can be object positions, mouse coordinates, etc.
// dx = x2 – x1;
// dy = y2 – y1;
// dist = Math.sqrt(dx * dx + dy * dy);

