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

// Remove an out-of-bounds object
// if (object.x - object.width / 2 > right ||
// object.x + object.width / 2 < left ||
// object.y - object.height / 2 > bottom ||
// object.y + object.height / 2 < top) {
// //code to remove object
// }
// Regenerate an out-of-bounds object
// if (object.x - object.width / 2 > right ||
// object.x + object.width / 2 < left ||
// object.y - object.height / 2 > bottom ||
// object.y + object.height / 2 < top) {
// //reset object position and velocity
// }

// Screen wrapping for an out-of-bounds object
// if (object.x - object.width / 2 > right) {
// object.x = left - object.width / 2;
// } else if (object.x + object.width / 2 < left) {
// object.x = right + object.width / 2;
// } if (object.y - object.height / 2 > bottom) {
// object.y = top - object.height / 2;
// } else if (object.y + object.height / 2 < top) {
// object.y = bottom + object.height / 2;
// }
// Apply friction (the correct way)
// speed = Math.sqrt(vx * vx + vy * vy);
// angle = Math.atan2(vy, vx);
// if (speed > friction) {
// speed -= friction;
// } else {
// speed = 0;
// }
// vx = Math.cos(angle) * speed;
// vy = Math.sin(angle) * speed;
// Apply friction (the easy way)
// vx *= friction;
// vy *= friction;