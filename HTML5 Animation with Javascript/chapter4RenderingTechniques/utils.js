function utils () {
}

utils.colorToRGB = function (color, alpha) {
	// if string format, convert to number
	if (typeof color === 'string' && color[0] === '#') {
		color = window.parseInt(color.slice(1), 16);
	}
	alpha = (alpha === undefined) ? 1 : alpha;

	// extract component values
	var r = color >> 16 & 0xff,
		g = color >> 8 & 0xff,
		b = color & 0xff,
		a = (alpha < 0) ? 0 : ((alpha > 1) ? 1 : alpha); //check range

	// use 'rgba' if needed
	if (a === 1) {
		return "rgb("+r+", "+g+", "+b+")";
	} else {
		return "rgba("+r+", "+g+", "+b+", "+a+")";
	}
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


// x1 = xt * 2 - (x0 + x2) / 2;
// y1 = yt * 2 - (y0 + y2) / 2;
// x1 = mouse.x;
// y1 = mouse.y;
// x1 = mouse.x * 2 - (x0 + x2) / 2;
// y1 = mouse.y * 2 - (y0 + y2) / 2;

// var gradient = context.createLinearGradient(0, 0, 100, 100);
// gradient.addColorStop(0, "#ffffff");
// gradient.addColorStop(1, "#ff0000");

// context.fillStyle = gradient;
// context.fillRect(0, 0, 100, 100);

/*<video controls autobuffer>
<source src="movieclip.mp4" type="video/mp4"/>
<source src="movieclip.webm" type="video/webm"/>
<source src="movieclip.ogv" type="video/ogg"/>
<p>This browser does not support the <code>video</code> element.</p>
</video>*/

// var pixels = [255, 0, 0, 255, 255, 0, 0, 255,
// 255, 0, 0, 255, 255, 0, 0, 255];

// for (var offset = 0, len = pixels.length; offset < len; offset += 4) {
// 	var r = pixels[offset], //red
// 	g = pixels[offset + 1], //green
// 	b = pixels[offset + 2], //blue
// 	a = pixels[offset + 3]; //alpha
// }

// var offset = (xpos + ypos * imagedata.width) * 4;

// var imagedata = context.getImageData(0, 0, canvas.width, canvas.height),
// pixels = imagedata.data
// for (var offset = 0, len = pixels.length; offset < len; offset += 4) {
// pixels[offset] = 0; //red
// pixels[offset + 1] = pixels[offset + 1]; //green
// pixels[offset + 2] = pixels[offset + 2]; //blue
// pixels[offset + 3] = pixels[offset + 3]; //alpha
// }
// context.putImageData(imagedata, 0, 0);

// Convert hex to decimal
// console.log(hexValue);
// Convert decimal to hex
// console.log(decimalValue.toString(16));
// Combine component colors
// color = red << 16 | green << 8 | blue;
// Extract component colors
// red = color24 >> 16 & 0xFF;
// green = color24 >> 8 & 0xFF;
// blue = color24 & 0xFF;
// Draw a curve through a point
// // xt, yt is the point you want to draw through
// // x0, y0 and x2, y2 are the end points of the curve
// x1 = xt * 2 - (x0 + x2) / 2;
// y1 = yt * 2 - (y0 + y2) / 2;
// context.moveTo(x0, y0);
// context.quadraticCurveTo(x1, y1, x2, y2);