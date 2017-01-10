console.log("Working...");
$(function(){
    //COUNTER FOR NUMBERS
        $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});
$(window).on('load', function(){
	$('#page-preloader').delay(1000).fadeOut('slow');
});
$(document).ready(function(){
    //WOW ANIMATE
    new WOW().init();
  //SLIDER #1
  $('#slider1').bxSlider({
    slideWidth: 270,
    minSlides: 1,
    maxSlides: 4,
    slideMargin: 30,
    responsive: true,
    infiniteLoop: true
  });
  //SLIDER #2
  $('#slider2').bxSlider({
    slideWidth: 500,
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 50,
    responsive: true,
    infiniteLoop: true
  });

  //TABS
  $('.tab-control-link').click(function(e){
        e.preventDefault();

        

        var     that = $(this),
                item = that.closest('.tab-control-item'),
                contentItem = $('.tab-item'),
                itemPosition = item.index(),
                triangular = $('.tab-item:before'),
                ww = $(window).width();

        
        if(ww > 736) {
            triangular.css('display', 'none');
            contentItem.eq(itemPosition)
            .add(item)
            .addClass('active')
            .siblings()
            .removeClass('active');
        }
        else {
            that.next()
                .slideToggle()
                .closest('.tab-control-item')
                .addClass('active')
                .siblings()
                .removeClass('active');
        }
        
    });

    //GOOGLE MAP
    var googleMap = function () {
            var myCenter = new google.maps.LatLng(50.401688, 30.376422);
                image = 'images/marker.png';

            function initialize() {
                var mapProp = {
                center: myCenter,
                zoom: 16,
                scrollwheel: false,
                draggable: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

            var marker = new google.maps.Marker({
                position: myCenter,
                icon: image
            });

            marker.setMap(map);
            }
            google.maps.event.addDomListener(window, 'load', initialize);
    };
    
    googleMap();

    //SLIDE ANIM FOR BEFORE/AFTER
    $('.img-controls').click(function(e){
        var that = $(this),
            item = $('.slide-img'),
            itemIMG = that.next().children(),
            itemLeft = parseInt(that.css('left')),
            itemWidth = parseInt(itemIMG.css('width'));

        if(itemLeft > 2 && itemWidth > 1) {
            that.stop().animate({ left: "1%" },1000);
            itemIMG.stop().animate({ width: "0%" }, 1000 ); 
        }
        else {
            that.stop().animate({ left: "50%" },1000);
            itemIMG.stop().animate({ width: "50%" }, 1000 );  
        }
                 
        
    });

    //MOBILE MENU
    function mobileMenu() {
      var $trigger = $('.trigger-nav'),
          $menu = $('.trigger-victim');
      
      $trigger.click(function() {
        $(this).next($menu).stop().animate({ height: "toggle" });
        // $(this).next($menu).stop().slideToggle();
      });
      
      $(window).resize(function() {
        if ($(window).width() > 1024){
          $menu.removeAttr('style');
        }
      });
      
    }
     mobileMenu();
     

     function deleteBr () {
        var that = $('#deleteBr'),
            br  = $('br'),
            aim = that.find(br);

            if ($(window).width() < 768){
                console.log('work');
                aim.remove();
            }
     }
     deleteBr ();
     
     //MODAL WINDOW ANIMATION
     $('.btn-booking').click(function(){
        var modal = $('.modal');    
            
        console.log(modal);
        modal.stop().slideDown();

     });
     $('.modal').click(function(){
        var that = $(this);    
            
        that.stop().slideUp();
        
     });
     
});
