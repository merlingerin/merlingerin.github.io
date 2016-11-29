(function ($) {
    
  'use strict';
  
  //FIXED MENU
  // $(document).ready(function() {
  //   var navPos, winPos, navHeight;


  //   function refreshVar() {
  //     navPos = $('nav_fixed').offset().top;
  //     navHeight = $('nav_fixed').outerHeight(true);
  //   }

  //   refreshVar();
  //   $(window).resize(refreshVar),
  //   $('<div class="clone-nav"></div>').insertBefore('nav_fixed').css('height', navHeight).hide();

  //   $(window).scroll(function() {
  //      winPos = $(window).scrollTop();
  //      if ( winPos >= navPos ) {
  //       $('nav_fixed').addClass('fixed');
  //       $('.clone-nav').show();
  //      }
  //      else {
  //       $('nav_fixed').removeClass('fixed');
  //       $('.clone-nav').hide();
  //      }
  //   });
  // });
  //TRIGGER
  $(document).ready(function () {
    
    function blueasyMenu() {
      var $trigger = $('.trigger-nav'),
          $menu = $('.trigger-victim');
      
      $trigger.click(function() {
        $(this).next($menu).slideToggle();
      });
      
      $(window).resize(function() {
        if ($(window).width() > 992){
          $menu.removeAttr('style');
        }
      });
      
    }
     blueasyMenu();
  }); //end ready

//carusel
 $(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        nextButton: '.slider__button_next',
        prevButton: '.slider__button_prev',
          // Default parameters
          slidesPerView: 3,
          spaceBetween: -20,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          loop: true,
          // Responsive breakpoints
          breakpoints: {
            // when window width is <= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            // when window width is <= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is <= 970px
            1024: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            // when window width is <= 1170px
              1270: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }
    });     
  });
// $(".contacts__tel").click(function() {
//   showWidth( "window", $( window ).width() );
// });
// function showWidth( ele, w ) {
//   console.log( "The width for the " + ele + " is " + w + "px." );
// }
  $(document).ready(function () {
    var elem = $('.contacts__tel'),
        dWidth = $( window ).width(),
        a = function() {
            if ( $( window ).width() < 768 ) {
              elem.removeClass('col-xs-4');
              elem.addClass('')
            }
            else {
              return 0;
            }
          }
    a();

  });

}(jQuery));

