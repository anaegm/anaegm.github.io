$(window).on('load', function() {
	setTimeout(loop, 200);
});

function loop() {
	$('main').css('background-position', '100% 0');
	
	setTimeout(function() {		   	
		$('#gelato').fadeIn(2500);
	}, 250);
	
	var delay = 0;
	$('section#upper > *, section#lower > *').each(function() {
		var $element = $(this);
		setTimeout(function(){
		   $element.addClass('transition-in-animation');
		}, delay);
		delay += 150;
	});
	
	setTimeout(function(){
	   $('.flag').each(function() {
		var h = $(this).width();
		for (var i = 0; i < h; i++) {
			var flagElement = $("<div class='flag-element'>");
			flagElement.css('background-position', -i + "px 0");
			flagElement.css('-webkit-animation-delay', i * 10 + 'ms');
			flagElement.css('-moz-animation-delay', i * 10 + 'ms');
			flagElement.css('-ms-animation-delay', i * 10 + 'ms');
			flagElement.css('-o-animation-delay', i * 10 + 'ms');
			flagElement.css('animation-delay', i * 10 + 'ms');
			$(this).append(flagElement);
		}
		}).promise().done(function() { 
			$('div.flag').css('background-image', 'none');
			$('main').addClass('uniform-bg'); 
		});
	}, 2500);
	
	setTimeout(function() {
		$('#gelato').addClass('transition-in-fadeout');
		$('section#center > *').not('#gelato').addClass('transition-in-animation');
	}, 7500);
	
	
	setTimeout(function() {
		$('#fade-out').show(function() {
			$(this).css('background-position', '100% 0');
		});
	}, 15000);
	
	setTimeout(function(){
		$('main').removeClass('uniform-bg');
		$('#gelato').hide().removeClass('transition-in-fadeout');
		$('section#upper > *, section#lower > *').removeClass('transition-in-animation');
		$('section#center > *').not('#gelato').removeClass('transition-in-animation');
		$('.flag').empty();
		$('div.flag').css('background-image', '');
		$('main').css('background-position', '0 0');
	}, 16500); 
	
	setTimeout(function(){
		loop();
		$('#fade-out').hide().css('background-position', '0 0');
	}, 18000);
}