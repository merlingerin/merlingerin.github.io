$(function(){

	// $(document).ready(function(){
	// 	var victim = $('.menu__link');
	// 		svg = $(victim).next();
	// 	$('.menu__link').click(function(){
	// 		$(svg).addClass('active')
	// 	});
	// });
////////////////////HEADER MENU//////////////////////////
	// $(document).ready(function(){
	// 	console.log("Working...")
	// 	var WH = $(window).innerWidth();
	// 	console.log(WH);
	// 	if( WH > 992 ) {
	// 		$('.menu__link').mouseover(function(){
	// 		$(this).next().addClass('canvasAnim').fadeIn();
	// 		$(this).next()
	// 		});
	// 		$('.menu__link').mouseout(function(){
	// 			$(this).next().removeClass('canvasAnim').stop().fadeOut();
	// 		});

	// 		$('.menu__link').click(function(){
	// 			$(this).next().children().css('stroke', '#ffad00');
	// 		});
	// 	}
	// 	else
	// 		$('.menu__link').click(function(){
	// 			$(this).next().children().css('stroke', '#ffad00');
	// 		});

	// });
//////////////////// END HEADER MENU//////////////////////////
/////////////////////////////SECONDS BAR/////////////////
		var chC = function() { 
			var times = new Date(),
				elem = $('.bar__list li'),
				seconds = times.getSeconds(),
				windowWidth = $('.bar__list').width(),
				secView = $('.sec-counter'),
				spanMargin = secView.css('margin-left'),
				spanText = $('.seconds__text');
			if($(elem[60]).attr('background-color','#b6b6b6')) {
				$(elem).css('background-color', '#269ed8');
			};
		    for(var i = 0; i < seconds; i++){
			    var picked = elem[i];
				$(picked).css('background-color', '#b6b6b6');;
				$(spanText).css('left', (i * (windowWidth/59)) - 14 + 'px');
				// if(i > 20) {
				// 	$(spanText).css('left', i * (windowWidth/59)*0.9 + 'px');
				// }
				// else {
				// 	$(spanText).css('left', i * (windowWidth/59)*0.9 + 'px');
				// }

				if( seconds >= 10 ) {
					if (seconds >= 52){
						$(secView)
						.text(seconds)
						.css('left', i * (windowWidth/59) + 'px');
					}
					else {
						$(secView)
						.text(seconds)
						.css('left', i * (windowWidth/59) + 'px');
					}
				}
				else { $(secView)
					.text(seconds)
					.css('left', i * (windowWidth/59) + 'px');}
		    }
		};
		setInterval(chC, 1000);
//////////////////////////////////////////////////////////////


///////////////////////////TIMER/////////////////////////////
	$('.month').countdown('2017/10/10', function(event) {
	  $(this).html(event.strftime(' %m'));
	});
	$('.days').countdown('2017/10/10', function(event) {
	  $(this).html(event.strftime(' %d'));
	});
	$('.hours').countdown('2017/10/10', function(event) {
	  $(this).html(event.strftime(' %H'));
	});
	$('.minutes').countdown('2017/10/10', function(event) {
	  $(this).html(event.strftime(' %M'));
	});

///////////////////////////END TIMER/////////////////////////////
/////////////DECORATION FOR CARD////////////////////////////////
// $('#card2').on({
// 	mouseover: function(e){
// 		$(this).find('.figure-1').jqFloat();
// 		$(this).find('.figure-2').jqFloat();
// 		$(this).find('.figure-3').jqFloat();
// 	},
// 	mouseout: function(e){
// 		$('.figure-1').stop();		
// 		$('.figure-2').stop();		
// 		$('.figure-3').stop();		
// 	}
// });
// $('#card1').on({
// 	mouseover: function(e){
// 		$(this).find('.figure-1').jqFloat();
// 	},
// 	mouseout: function(e){
// 		$('.figure-1').stop();		
	
// 	}
// });
// $('#card3').on({
// 	mouseover: function(e){
// 		$(this).find('.figure-1').jqFloat();
// 		$(this).find('.figure-2').jqFloat();
// 		$(this).find('.figure-3').jqFloat();
// 	},
// 	mouseout: function(e){
// 		$('.figure-1').stop();		
// 		$('.figure-2').stop();		
// 		$('.figure-3').stop();		
// 	}
// });
///////////// END DECORATION FOR CARD//////////////////
//////////////GOOGLE MAPS//////////////////////

var myCenter = new google.maps.LatLng(41.878114, -87.629798);

function initialize() {
var mapProp = {
  center: myCenter,
  zoom: 12,
  scrollwheel: false,
  draggable: false,
  mapTypeId: google.maps.MapTypeId.ROADMAP
  };

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
  position: myCenter,
});

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);


//////////////END GOOGLE MAPS//////////////////////
function Menu() {
      var $trigger = $('.menu-trigger'),
          $menu = $('.trigger-victim');
      
      $trigger.click(function() {
        $('#nav-icon3').toggleClass('open');
        $(this).next($menu).slideToggle();
      });
      
      $(window).resize(function() {
        if ($(window).width() > 992){
          $menu.removeAttr('style');
        }
      });
      
    }
Menu();

$(document).ready(function(){
	var x = $(".menu-fixed").offset(),
        	menu = $(".menu-fixed");
	$(window).scroll( function(){
        var	winOffset = $(window).scrollTop();

        if ( x.top  < winOffset) {
        	$(menu).addClass('menu-fixed-act');
        }
        else 
        	$(menu).removeClass('menu-fixed-act');
	});
        
});


});
