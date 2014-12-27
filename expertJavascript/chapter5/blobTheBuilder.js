var blobTheBuilder, winUrl, worker;
winUrl = window.URL || window.webkitURL;
blobTheBuilder = new Blob(["self.onmessage=function (e) {postMessage(Math.round(Math.sqrt(e.data)))}"]);
worker = new Worker(winUrl.createObjectUrl(blobTheBuilder));
worker.onmessage = function (e) {
	return console.log(e.data);
}
worker.postMessage(42);
