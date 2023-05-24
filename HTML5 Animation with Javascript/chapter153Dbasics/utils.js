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

utils.containsPoint = function (rect, x, y) {
	return !(x < rect.x || x > rect.x + rect.width ||
			y < rect.y || y > rect.y + rect.height);
}

utils.intersects = function (rectA, rectB) {
	return !(rectA.x + rectB.width < rectB.x ||
			rectB.x + rectB.width < rectA.x ||
			rectA.y + rectA.height < rectB.y ||
			rectB.y + rectB.height < rectA.y);
}

utils.colorToRGB = function (color, toNumber) {
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

// Basic perspective
// scale = fl / (fl + zpos);
// object.scaleX = object.scaleY = scale;
// object.alpha = scale; // optional
// object.x = vanishingPointX + xpos * scale;
// object.y = vanishingPointY + ypos * scale;

// Z-sorting
// //assumes an array of 3D objects with a zpos property
// function zSort (a, b) {
// return (b.zpos – a.zpos);
// }
// objects.sort(zSort);

// Coordinate rotation
// x1 = xpos * cos(angleZ) – ypos * sin(angleZ);
// y1 = ypos * cos(angleZ) + xpos * sin(angleZ);
// x1 = xpos * cos(angleY) – zpos * sin(angleY);
// z1 = zpos * cos(angleY) + xpos * sin(angleY);
// y1 = ypos * cos(angleX) – zpos * sin(angleX);
// z1 = zpos * cos(angleX) + ypos * sin(angleX);

// 3D distance
// dist = Math.sqrt(dx * dx + dy * dy + dz * dz);