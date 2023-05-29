var classes = new Lawnchair({name: 'classes'}, function () {
	this.save({name:'calculus 101', professor: 'Jenkins'});
	this.save({name:'Physics 220', maxClassSize: 30});
	this.save({name:'Advanced Physics', prerequisite: 'Physics 220'});
});