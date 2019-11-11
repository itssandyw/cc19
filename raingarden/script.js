$(document).ready(function(){

$(window).scroll(function () {
		var scrollpos = $(window).scrollTop();
		$('.rain').css({
			'height': +(scrollpos) + 'windowheight'

		});
	});
 });
