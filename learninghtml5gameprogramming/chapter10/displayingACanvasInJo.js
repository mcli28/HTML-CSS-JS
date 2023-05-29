//initialize jo
jo.load();

//define a wrapper for document.body
var scn = joScreen();

var canvas = new joHTML("<canvas height="200" width="200"></canvas>");
scn.push(canvas);