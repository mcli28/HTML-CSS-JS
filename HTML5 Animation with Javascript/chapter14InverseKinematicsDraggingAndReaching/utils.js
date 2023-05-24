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

utils.colorRGB = function (color, toNumber) {
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


// Important Formulas in This Chapter
// For the standard form of inverse kinematics, you use the law of cosines formula.
// Law of Cosines
// a
// a
// 2 = b
// 2 + c
// 2 - 2 ×  b ×  c × cos A
// b
// cos A
// b
// 2 = a
// 2 + c
// 2 - 2 ×  a ×  c × cos B
// c
// cos B
// c
// 2 = a
// 2 + b
// 2 - 2 ×  a ×  b ×  cos C
// Law of Cosines in JavaScript
// var A = Math.acos((b * b + c * c – a * a) / (2 * b * c)),
// B = Math.acos((a * a + c * c – b * b) / (2 * a * c)),
// C = Math.acos((a * a + b * b – c * c) / (2 * a * b));