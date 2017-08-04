(function ($) {
  'use strict';
  //TAB_WRAPPER
  $(document).ready(function () {
    function project3Tabs() {
      var $wrapper = $('.tab-wrapper'),
          $menu = $wrapper.find('.tab-menu li'),
          $content = $wrapper.find('.thumbs-row');

      $content.not(':first-of-type').hide();
      $content.each( function(i)  {
        $(this).attr('data-tab', 'tab-'+i);
      });
      $menu.each( function(i) {
        $(this).attr('data-tab', 'tab-'+i);
      });

      $menu.click(function() {
        var $getWrapper = $(this).closest($wrapper),
            dataTab = $(this).attr('data-tab');

        $getWrapper.find($menu).find('a').removeClass('active');
        $(this).find('a').addClass('active');

        $getWrapper.find($content).hide();
        $getWrapper.find($content).filter('[data-tab='+dataTab+']').show();
      });
    }
    project3Tabs();

    //FIXED MENU
  $(document).ready(function() {
    var navPos, winPos, navHeight;


    function refreshVar() {
      navPos = $('nav').offset().top;
      navHeight = $('nav').outerHeight(true);
    }

    refreshVar();
    $(window).resize(refreshVar),
    $('<div class="clone-nav"></div>').insertBefore('nav').css('height', navHeight).hide();

    $(window).scroll(function() {
     winPos = $(window).scrollTop();
     if ( winPos >= navPos ) {
      $('nav').addClass('fixed');
      $('.clone-nav').show();
     }
     else {
      $('nav').removeClass('fixed');
      $('.clone-nav').hide();
     }
    });


  });
  

  }); //end ready

}(jQuery));
