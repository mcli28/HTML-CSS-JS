var https = require("https");

function getRepos (username, callback) {
	var options = {
		host: 'api.github.com',
		path: '/users/' + username + '/repos',
		method: 'GET'
	}

	var request = https.request(options, function (response) {
		var body = '';
		response.on("data", function (chunk) {
			body += chunk.toString('utf8');
		});
		response.on("end", function () {
			var repos = [];
			var json = JSON.parse(body);
			json.foreach(function () {
				repos.push({
					name: repo.name,
					description: repo.description
				});
			});
			callback(repos);
		});
	});

	request.end();
}

module.exports.getRepos = getRepos;