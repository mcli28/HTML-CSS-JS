Titatinium.UI.setBackgroundColor('#000');

var win1 = Titatinium.UI.createWindow({
	title: 'App',
	backgroundColor: '#fff'
});

var webview = Titatinium.UI.createWebView({
	url: 'index.html'	
});

win1.add(webview);

win1.open();