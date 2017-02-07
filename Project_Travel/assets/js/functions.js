
$(document).ready(function() {
'use strict';
    
    function mobileMenu() {
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
      $menu.mouseleave(function(){
        function menuHide() {
          $menu.fadeOut(700)
        };
        setTimeout(menuHide, 1500);
      });
    }
     mobileMenu();

    $(window).scroll(function(){
      var sticky = $('.sticky'),
          scroll = $(window).scrollTop();

      if (scroll >= 100) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });


    function call() {
    var msg = $('#footer-form').serialize();
        $.ajax({
          type: 'POST',
          url: 'Thanks.php',
          data: msg,
          success: function(data) {
            alert('Спасибо, форма отправленна.')
          },
          error:  function(){
          }
        });
 
    }
    call();

    function modalShow(){
      $('.modal-shw').on('click', function(){
        var modal = $('.modal-block'),
            form = $('.modal-wrapper');

          if(modal.is(":hidden")) {
            console.log('ssss');
            modal.fadeIn(700);
          }
      });
      $('.btn-close').on('click', function(){
          var that = this,
              modal = $('.modal-block');

          modal.fadeOut(700);
      });
    }
    modalShow();


    function cardAnim(){
      $('.card').hover(
        function(e){
          var that = $(this),
              offset = that.offset(),
              elWidthD = $(window).width() / 2;
          that.css('z-index', '999');
          if (elWidthD < offset.left) {
            that.css({
              transform: 'scale(1.2) translateX(-20%)',
              position: 'relative'  
            })
          }
          else {
            that.css({
              transform: 'scale(1.2) translateX(20%)',
              position: 'relative'  
            })
          }
        },
      function(e){
        var that = $(this);
        that.css('z-index', '0');
        that.css({
              transform: 'scale(1) translateX(0)',
              position: 'inherit'  
            })
      })
    }
    cardAnim();



  //*****ANKCHOR LINKS********//
  $("a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').stop().animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });

  //*****AJAX FORMS*****//
  $("#modal-form").submit(function() {
    $.ajax({
      type: "POST",
      url: "Thanks.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
      $("#form").trigger("reset");
    });
    return false;
  });
});