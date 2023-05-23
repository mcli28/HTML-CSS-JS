$(document).ready(function(){
	$('.thumbnail').on('click', function(){
		var idx = $(this).index();
		$('.featured-images').children('.active').removeClass('active');
		$('.featured-image-item').eq(idx).addClass('active');
		$('.thumbnail-images').children('.active').removeClass('active');
		$('.thumbnail').eq(idx).addClass('active');
	});
});