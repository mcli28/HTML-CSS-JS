function utils () {
}
utils.parseColor = function (color, toNumber) {
	if (toNumber === true) {
		if (typeof color === 'number') {
			return (color | 0); //chop off decimal
		}
		if (typeof color === 'string' && color[0] == '#') {
			color = color.slice(1);
		}
		return window.parseInt(color, 16);
	} else {
		if (typeof color === 'number') {
			// make sure our hexadecimal number is padded out
			color = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
		}
		return color;
	}
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

// vx = Math.cos(angle) * speed;
// vy = Math.sin(angle) * speed;

// Convert angular velocity to x, y velocity
// vx = speed * Math.cos(angle);
// vy = speed * Math.sin(angle);
// Convert angular acceleration (any force acting on an object) to x,
// y acceleration
// ax = force * Math.cos(angle);
// ay = force * Math.sin(angle);
// Add acceleration to velocity
// vx += ax;
// vy += ay;
// Add velocity to position
// object.x += vx;
// object.y += vy;