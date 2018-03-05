var pieces = [
	"img/KungFuPanda-0-0.jpg",
	"img/KungFuPanda-0-1.jpg",
	"img/KungFuPanda-1-0.jpg",
	"img/KungFuPanda-1-1.jpg",
	"img/KungFuPanda-2-0.jpg",
	"img/KungFuPanda-2-1.jpg"
];
// var piecesx = [0, 301, 0, 600, 0, 720];
// var piecesy = [0, 0, 200, 404];
// var piecesx = [0,71, 124,0,77,123 ];
// var piecesy = [0,0,0,72,72,72];
var piecesx = [0, 301, 720, 0, 305, 719];
var piecesy = [0, 0, 0, 302, 302, 302];

var v;
var doingjigsaw = false;
var firstpkel;

function init () {
	v = document.getElementById("dance");
	setupgame();
	bodyel = document.getElementById("body");
	formel = document.getElementById("questionform");
	setupjigsaw();
}

var bodyel;
var formel;
var nums = pieces.length;
var pieceelements = [];
var questionfel;

function setupgame () {
	var i;
	var x;
	var y;
	var uniqueid;
	var s;

	for (i = 0; i < nums; i++) {
		uniqueid = "a"+String(i);
		s = document.createElement('piece');
		s.innerHTML = ("'<img src='"+pieces[i]+"' id='"+uniqueid+"'/>");
		document.body.appendChild(s);
		thingelem = document.getElementById(uniqueid);
		x = piecesx[i]+100;
		y = piecesy[i]+100;
		// x = piecesx[i]+300;
		// y = piecesy[i]+300;
		console.log("val x:"+x+"val y:"+y);
		thingelem.style.top = String(y)+"px";
		thingelem.style.left = String(x)+"px";
		pieceelements.push(thingelem);
	}
	firstpkel = document.getElementById("a0");
	questionfel = document.getElementById("questionform")
	questionfel.style.left = "20px";
	questionfel.style.top = "400px";
	questionfel.feedback.value = " ";
}

function endjigsaw () {
	var df;
	if (doingjigsaw) {
		doingjigsaw = false;
		d.onmousedown = "";
		d.onmousemove = "";
		d.onmouseup = "";
		df = document.getElementById("fullpage");
		bodyel.removeChild(df);
		v.pause();
		v.style.display = "none";
	}
	setupjigsaw();
	return false;
}

function checkpositions () {
	var i;
	var x;
	var y;
	var tolerance = 10;
	var deltax = [];
	var deltay = [];
	var delx;
	var dely;
	for (i = 0; i < nums; i++) {
		x = pieceelements[i].style.left;
		y = pieceelements[i].style.top;
		x = x.substr(0, x.length-2);
		y = y.substr(0, y.length-2);
		x = Number(x);
		y = Number(y);
		delx = x - piecesx[i];
		dely = y - piecesy[i];
		deltax.push(delx);
		deltay.push(dely);
	}
	var averagex = doaverage(deltax);
	var averagey = doaverage(deltay);
	for (i = 0; i < nums; i++) {
		if ((Math.abs(averagex - deltax[i])>tolerance) || 
			(Math.abs(averagey - deltay[i])>tolerance)) {
			break;
		}
	}
	if (i < nums) {
		questionfel.feedback.value = "Keep working.";
	} else {
		questionfel.feedback.value = "GOOD!";
		for (i = 0; i < nums; i++) {
			pieceelements[i].style.display = "none";
		}
		v.style.left = firstpkel.style.left;
		v.style.top = firstpkel.style.top;
		v.style.display = "block";
		v.currentTime = 0;
		v.play();
	}
}

function doaverage (arr) {
	var sum;
	var i;
	var n = arr.length;
	sum = 0;
	for (i = 0; i < n; i++) {
		sum += arr[i];
	}
	return (sum/n);
}

function setupjigsaw () {
	v.pause();
	v.style.display = "none";
	doingjigsaw = true;
	var i;
	var x;
	var y;
	var thingelem;
	for (i = 0; i < nums; i++) {
		x = 10 + Math.floor(Math.random()*210);
		y = 50 + Math.floor(Math.random()*240);
		thingelem = pieceelements[i];
		thingelem.style.top = String(y)+"px";
		thingelem.style.left = String(x)+"px";
		thingelem.style.display = "inline";
	}
	d.onmousedown = startdragging;
	d.onmousemove = moving;
	d.onmouseup = release;
	d.addEventListener("touchstart", touchHandler, true);
	d.addEventListener("touchmove", touchHandler, true);
	d.addEventListener("touchend", touchHandler, true);
	d.addEventListener("touchcancel", touchHandler, true);

	var df = document.createElement('div');
	df.id = "fullpage";
	bodyel.appendChild(df);
	questionfel.submitbut.value = "Do jigsaw again.";
	questionfel.feedback.value = " ";
	formel.style.zIndex = 100;
}

function touchHandler (event) {
	var touches = event.changedTouches;
	if (touches.length > 1) {
		return false;
	}
	var first = touches[0];
	var type = "";
	switch(event.type){
		case "touchstart": 
			type = "mousedown";
			break;
		case "touchmove": 
			type = "mousemove";
			break;
		case "touchend": 
			type = "mouseup";
			break;
		default: 
			return;
	}
	var simulatedEvent = document.createEvent("MouseEvent");
	simulatedEvent.initMouseEvent(type, true, true, window, 1, 
									first.screenX, first.screenY,
									first.clientX, first.clientY,
									false, false, false, false, 0, null);
	first.target.dispatchEvent(simulatedEvent);
	event.preventDefault();
}
var d = document;
var ie = d.all;
var mouseDown = false;
var adjustX;
var adjustY;
var movingobj;

function release (e) {
	mouseDown = false;
	checkpositions();
}

function startdragging (e) {
	var o;
	var j;
	var i;
	var curX = ie ? e.clientX+d.body.scrollLeft : e.pageX;
	var curY = ie ? e.clientY+d.body.scrollTop : e.pageY;
	for (i = 0; i < nums; i++) {
		j = pieceelements[i];
		o = offset(j);
		if (curX >= o.x && curX <= o.x +
			j.width && curY >= o.y && curY <= o.y +
			j.height) {
			break;
		}
	}
	if (i < nums) {
		movingobj = pieceelements[i];
		adjustX = curX - o.x;
		adjustY = curY - o.y;
		mouseDown = true;
	}
}

function moving (e) {
	if (!mouseDown) return;
	if (ie)
		draw(e.clientX+d.body.scrollLeft, e.clientY+d.body.scrollTop);
	else
		draw(e.pageX, e.pageY);
}

function draw (x, y) {
	var js = movingobj.style;
	js.left = (x - adjustX) + "px";
	js.top = (y - adjustY) + "px";
}

function offset (obj) {
	var left = 0;
	var top = 0;
	if (obj.offsetParent)
		do{
			left += obj.offsetLeft;
			top += obj.offsetTop;
		} while (obj = obj.offsetParent);
	return {x: left, y: top};
}