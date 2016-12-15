$(function(){

	$(document).ready(function(){
		console.log("Working...")
		
		$('.menu__link').mouseover(function(){
			$(this).next().addClass('canvasAnim');
			$(this).next().fadeIn();
		});
		$('.menu__link').mouseout(function(){
			$(this).next().removeClass('canvasAnim');
			$(this).next().stop().fadeOut();
		});

		$('.menu__link').click(function(){
			$(this).next().children().css('stroke', '#ffad00');
		});
	});


	
	var chC = function() { 
		console.log('worked');
		var times = new Date(),
			elem = $('.bar__list li'),
			seconds = times.getSeconds(),
			secView = $('.sec-counter'),
			spanMargin = secView.css('margin-left'),
			spanText = $('.seconds__text');

		if($(elem[59]).attr('background-color','#b6b6b6')) {
			$(elem).css('background-color', '#269ed8');
		};
	    for(var i = 0; i < seconds; i++){
		    var picked = elem[i];
			$(picked).css('background-color', '#b6b6b6');

			$(spanText).css('margin-left', 70 + i * 16 + 'px');

			if( seconds >= 30 ) {
				if (seconds >= 50){
				$(secView)
				.text(seconds)
				.css('margin-left', 90 + i * 16 + 'px');
				}
				else {
					$(secView)
					.text(seconds)
					.css('margin-left', 87 + i * 16 + 'px');
				}
			}
			else { $(secView)
				.text(seconds)
				.css('margin-left', 83 + i * 16 + 'px');}
	    }
	};

	setInterval(chC, 1000);
	var n = $('.bar__list li').length;
	console.log(n); 
});
