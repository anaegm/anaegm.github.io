$(window).on('load', function () {
	setTimeout(function() {
		$('main').css('background-position', '100% 0');
		
		setTimeout(function() {		   	
			$('#carrot').css('opacity', 1);
			$('#carrot').fadeIn(2000);
			}, 300);
		
		var delayLeft = 0;
		var delayRight = 0;
		$('section#right img, section#right div.flag').each(function() {
			var $element = $(this);
			setTimeout(function(){
			   $element.addClass('transition-in-animation');
			}, delayRight);
			delayRight += 150;
		});
		$('section#left > *').each(function() {
			var $element = $(this);
			setTimeout(function(){
			   $element.addClass('transition-in-animation');
			}, delayLeft);
			delayLeft += 150;
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
			});
		}, 2500);
	}, 500);
});