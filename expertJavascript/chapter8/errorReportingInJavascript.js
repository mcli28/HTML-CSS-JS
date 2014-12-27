window.onerro = function (msg, url, lineNum) {
	$.ajax({
		url: "http://someserver.com/exception-notifier",
		type: "get",
		data: {
			message: msg,
			url: url
			lineNumber: lineNum
		},
		success: function (data) {
			alert("Error Reported");
		}
	});
}