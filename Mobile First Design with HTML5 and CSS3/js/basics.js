$(document).ready(function(){
	//all code that should run after the DOM loads goes here
	$('.navbar').removeClass('open');
	$('.menu-button').on('click', function(){
		$('.navbar').toggleClass('open');
	});
});