var banner = function (texto){
	var bgC,bgCtx,densidad=5,particulas=[],contador=0,c_final=40,canvas,ctx;
	this.texto = texto;
	this.init = function (id_c){
		canvas = document.getElementById(id_c);
		ctx = canvas.getContext('2d');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		bgC = document.createElement('canvas');
		bgC.height = window.innerHeight;
		bgC.width = window.innerWidth;
		bgCtx = bgC.getContext('2d');
		this.iniciar();
	}
	
}