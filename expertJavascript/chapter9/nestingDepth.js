// Nesting depth of three
var isRGBA = function (color) {
	if (color != 'red') {
		if (color != 'blue') {
			if (color != 'green') {
				if (color != 'alpha') {
					return false;
				};
			};
		};
	};
	return true;
}

// Nesting depth of three
var isRGBA = function (color) {
	if (color != 'red' && color != 'blue' && color != 'green' && color != 'alpha') {
		return false;
	};
	return true;
}