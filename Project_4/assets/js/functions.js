(function() {
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

     function jar() {
     	var $jar = $('.button-link')
     }
}(jQuery));