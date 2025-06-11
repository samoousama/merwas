$(document).ready(function(){
	$('#openNav').click(function(){
		$('.overlay-menu').toggleClass('showmenu');
		$('body').toggleClass('overlayhidn');
	});
});
