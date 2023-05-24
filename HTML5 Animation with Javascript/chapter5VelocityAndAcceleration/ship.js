function Ship () {
	this.x = 0;
	this.y = 0;
	this.width = 25;
	this.height = 20;
	this.rotation = 0;
	this.showFlame = false;
}

Ship.prototype.draw = function(context) {
	context.save();
	context.translate(this.x, this.y);
	context.rotate(this.rotation);
	context.lineWidth = 1;
	context.strokeStyle = "#ffffff";
	context.beginPath();
	context.moveTo(10, 0); //set the path origin
	context.lineTo(-10, 10); //set the path destination
	context.lineTo(-5, 0); //set the path destination
	context.lineTo(-10, -10); //set the path destination
	context.lineTo(10, 0); //set the path destination
	context.stroke(); //outline the path
	if (this.showFlame) {
		context.beginPath();
		context.moveTo(-7.5, -5); //set the path origin
		context.lineTo(-15, 0); //set the path destination
		context.lineTo(-7.5, 5); //set the path destination
		context.stroke(); //outline the path
	}
	context.restore();
};