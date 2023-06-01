$(document).ready(function(){
	//append a close trigger for each block
	$('.menu .content').append('<span class="close">x</span>');

	//show window
	function showContent(elem){
		hideContent();
		elem.find('.content').addClass('expanded');
		elem.addClass('cover');
	}

	//reset all
	function hideContent(){
		$('.menu .content').removeClass('expanded');
		$('.menu li').removeClass('cover');
	}

	//when a li is clicked, show its content window and position it above all
	$('.menu li').click(function(){
		showContent($(this));
	});

	//when tabbing, show its content window using ENTER key
	$('.menu li').keypress(function(e){
		if (e.keycode == 13) {
			showContent($(this));
		}
	});

	//when right upper close element is clicked - reset all
	$('.menu .close').click(function(e){
		e.stopPropagation();
		hideContent();
	});

	//also, when ESC key is pressed - reset all
	$(document).keyup(function(e){
		if (e.keycode == 27) {
			hideContent
		}
	});

 });