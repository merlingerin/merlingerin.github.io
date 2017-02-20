$('.item-list .btn').not('.empty').on('click',function(){
        if (!$(this).closest('li').hasClass('active')) {
          var $this = $(this);
          var ww = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
          $this.closest('ul').find('li').removeClass('active').removeAttr('style');
          if (ww>992) {
            $this.closest('li').stop(1,1);
              var hinfo = $this.closest('li').find('.info').height();
              $this.parent().height($this.height()+hinfo+110)

              setTimeout(function(){
                var hinfo = $this.closest('li').find('.info').height();
                $this.parent().height($this.height()+hinfo+110)
              },500)
          };
          if ((ww<992)&&(ww>767)) {
            var hinfo = $(this).parent().find('.info').height();
            $(this).parent().height($(this).height()+hinfo+70)
          };
          $(this).closest('li').addClass('active');
        }else{
          $(this).closest('ul').find('li').removeClass('active').removeAttr('style');
        };
    });

/*кнопки в блоку список документов на галвной странице*/
    $("#how").click( function(){
        $('html, body').animate({
            "scrollTop": $('.block05').offset().top
        });

        $(".block050101a").hide();
        $(".block050102").hide();
        $(".block050103").hide();
        $("#adven").removeClass("active");
        $("#service2").removeClass("active");
        $("#how").addClass("active");
        $(".block050101").show();
    });
    $("#adven").click( function(){
        $('html, body').animate({
            "scrollTop": $('.block05').offset().top
        });

        $(".block050101").hide();
        $(".block050101a").hide();
        $(".block050103").hide();
        $("#how").removeClass("active");
        $("#service2").removeClass("active");
        $("#adven").addClass("active");
        $(".block050102").show();
    });
    $("#service2").click( function(){
        $('html, body').animate({
            "scrollTop": $('.block05').offset().top
        });

        $(".block050101").hide();
        $(".block050101a").hide();
        $(".block050102").hide();
        $("#adven").removeClass("active");
        $("#how").removeClass("active");
        $("#service2").addClass("active");
        $(".block050103").show();
    });
    /*******************************************************/

    /*наведение и клик блок 5 главного экрана*/
    $(".answer").hover( function(){
        $(this).addClass("zaimhover");
    });
    $(".answer").mouseleave( function(){
        $(this).removeClass("zaimhover");
    });
    $(".answer").click( function(){
        $(this).find('.plink span').css('color', '#999');
        if ( $(window).width() < 1160 && ! getCookie('fversion')){
            $(this).find('span.hidden').css('display', 'block');
            $(this).addClass('fancybox');
        } else {
            $(this).removeClass('fancybox');
            $(".block050101").hide();
            $(".block050101a").show();
            $('.answer_close').show();
            $(".answer_content").html($(this).find('span.hidden').html());
        }
    });
    $(".answer_close").click( function(){
        $(this).hide();
        $(".block050101a").hide();
        $(".block050101").show();
    });
    /**********************************/