var getMessage, getNextName, nextName, onconnect, viewers;

getNextName = function () {
	nextName++;
	return "Guest" + nextName;
}

getMessage = function (event) {
	var channel, from, to, viewer, _results;
	switch (event.data.action) {
		case "txt":
			_results = [];
			for (viewer in viewers) {
				_results.push(viewers[viewer].port.postMessage({
					action: "txt",
					envelope: {
						from: event.target.session.name,
						body: event.data.envelope.body
					}
				}));
			}
			return _results;
			break;
		case "msg":
			from = event.target.session;
			to = viewers[event.data.envelope.to];
			if (to) {
				channel = new MessageChannel();
				from.por.postMessage({
					action: "msg",
					envelope: {
						to: to.name,
						from: from.name,
						body: "private message sent to" + event.data.envelope.to
					}
				}, [channel.port1]);
				return to.port.postMessage({
					action: "msg",
					envelope: {
						to: from.name,
						from: to.name,
						body: "private message: " + event.data.envelope.body
					}
				}, [channel.port2]);
			}
	}
}

nextName = 0;
viewers = {};

onconnect = function (event) {
	var name;
	name = getNextName();
	event.ports[0].session = {
		port: event.ports[0],
		name: name
	}
	viewers[name] = event.ports[0].session;
	event.ports[0].postMessage({
		action: "cfg",
		envelope: {
			from: name,
			body: "connected"
		}
	});
	return event.ports[0].onmessage = getMessage;
}