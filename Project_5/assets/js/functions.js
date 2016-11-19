(function ($) {
    
  'use strict';

$('.green-button-down').click(function(event) {
    // Preventing default action of the event
    event.preventDefault();
    // Getting the height of the document
    var n = $(document).height();
    $('html, body').animate({ scrollTop: 800 }, 500);
//                                       |    |
//                                       |    --- duration (milliseconds) 
//                                       ---- distance from the top
});


  $(document).ready(function () {
    var $col = $('[class^="col-"]'),
        $h = $('.stn-heading'),
        $p = $('.stn-paragraph');

      $p.addClass('wow').addClass('fadeInUp');
      $h.addClass('wow').addClass('fadeInUp');
      $col.addClass('wow').addClass('fadeInUp');
  });

  $(document).ready(function () {
    function blueasyTabs() {
          var $wrapper = $('.tab-wrapper'),
              $menu = $wrapper.find('.tab-menu li'),
              $content = $wrapper.find('.thumbs-row');
          
    $content.not(':first-of-type').hide();
    $content.each(function(i) { 
        $(this).attr('data-tab', 'tab-'+i);
    });/*function(i)*/
    
    $menu.each(function(i) {
        $(this).attr('data-tab', 'tab-'+i);
    });
        
    $menu.click(function() {
        var $getWrapper = $(this).closest($wrapper),
            dataTab = $(this).attr('data-tab');
        
        $getWrapper.find($menu).find('a').removeClass('active');
        $(this).find('a').addClass('active');
        
        $getWrapper.find($content).hide();
        $getWrapper.find($content).filter('[data-tab='+dataTab+']').show();
    });   /*menu.click*/
    } /*document.ready*/
          blueasyTabs();
    
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

}(jQuery));