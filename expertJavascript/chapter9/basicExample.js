var route;
// score = 1
route = function () {
	// score = 2
	if (request && request.controller) {
		switch (true) {
			// score = 3
			case request.controller === "home"

			// score = 4
			if (request.action) {

				// score = 5
				if (request.action === "search") {
					return goTo("/#home/search");
					// score = 6
				} else if (request.action === "tour") {
					return goTo("/#home/tour");
				} else {
					return goTo("/#home/index");
				}
			}
			break;

			// score = 7
			case request.controller === "users":

			// score 8
			if (request.action && request.action === "show") {
				return goTo("/#users/show" + request.id);
			} else {
				return goTo("/#users/index");
			}
		}
	} else {
		return goTo("/#error/404");
	}
}