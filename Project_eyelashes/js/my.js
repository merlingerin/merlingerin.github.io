$(document).ready(function(){
	var rab_count = $('.rab_container ul > li').length;
	var rab_cont_count=$('.rab_container_container').width()/130;
	var rab_razn=rab_count-rab_cont_count;
	var rab_sm=0;
	var interier_kol=$('.block4 .slider ul').children('li').length;
	var bl_sl_width=($('.block4 .slider ul li').width()+25)*interier_kol;
	var bl_sl_strcol=parseInt($('.block4 .slider').width()/$('.block4 .slider ul li').width());
	var bl_sl_kol=interier_kol-bl_sl_strcol;
	var slider_ot=0;
	var index=0;
	var x = document.getElementById('slider_li');
	var slider_margin=document.defaultView.getComputedStyle(x, null).getPropertyValue("margin-Right");
	var slider_margin_int=slider_margin.replace('px','');
	var slider_marginleft=$('#slider_li').width()+parseInt(slider_margin_int);
	var block4_margin=-($('.block4 .slider').width()-$(window).width())/2;
		$('.block4 .slider').css('margin-left',block4_margin+'px');
		if($(window).width()>1280){
			$('.block4 .slider .nav_left').css('left','405px');
			$('.block4 .slider .nav_right').css('right','405px');
		}
		else if($(window).width()>768){
			$('.block4 .slider .nav_left').css('left','30vw');
			$('.block4 .slider .nav_right').css('right','28vw');
			slider_marginleft=slider_marginleft+$(window).width()/100*1.5;
		}
		else{
			$('.block4 .slider .nav_left').css('left','335px');
			$('.block4 .slider .nav_right').css('right','325px');	
			slider_marginleft=slider_marginleft+10;		
		}
	$('.block4 .slider ul').width(bl_sl_width);
	var interier_kol_str=$('.block4 .slider').width();
	var li_w1=$(window).width()*0.045;
	var li_w2=$(window).width()*0.022;
	$(window).scroll(function (){
		if ($(this).scrollTop() > 50){
			$('.str_top').stop().fadeIn(300);
			if($(window).width()>'1260'){
				$('.header_menu ul li a').stop().animate({paddingRight:30, paddingLeft:30},300);
				$('.logo_menu').stop().fadeIn(300);
				$('.menutel').stop().fadeIn(300);
			};
			if($(window).width()>'750'){$('.header_menu').stop().animate({height:54},300)};
		}
		else{
			$('.str_top').stop().fadeOut(300);
			if($(window).width()>'1260'){
				$('.header_menu ul li a').stop().animate({paddingLeft:63, paddingRight:63},300);
				$('.logo_menu').stop().fadeOut(300);
				$('.menutel').stop().fadeOut(300);
			};
			if($(window).width()>'750'){$('.header_menu').stop().animate({height:61},300)};
		}
	});
	$('.str_top').click(function(){
		$('body,html').animate({scrollTop: 0}, 800);
	});
	$('a[href^="#"]').click(function () {
	     elementClick = $(this).attr("href");
	     destination = $(elementClick).offset().top;
	       $('body').animate( { scrollTop: destination }, 1100 );
	     return false;
   });
	$('.block4 .slider ul li').mouseover(function(){
		$(this).children('div').stop().fadeIn(300);
	});
	$('.block4 .slider ul li').mouseleave(function(){
		$(this).children('div').stop().fadeOut(300);
	});	
	$('.block4 .slider ul li').click(function(){
		index = $( ".block4 .slider ul li" ).index( this )+1;
		$(".popimg").html('<img src="images/int/'+index+'.jpg">');
		$(".popimg").css('display','block');
		$("#modal .str_left").css('display','block');
		$("#modal .str_right").css('display','block');
		$("#modal").fadeIn(300);
	});	
	$('.slider .nav_right').click(function(){
		if(slider_ot<=bl_sl_kol){
			slider_ot++;
			$('.block4 .slider ul').animate({"margin-left":'-='+slider_marginleft+'px'},300);
		};
	});
	$('.slider .nav_left').click(function(){
		if(slider_ot>=0){
			slider_ot--;
			$('.block4 .slider ul').animate({"margin-left":'+='+slider_marginleft+'px'},300);
		};
	});
	$(".popup").click(function(){
		$(".popimg").fadeOut(300);
		$("#modal .str_left").fadeOut(300);
		$("#modal .str_right").fadeOut(300);	
		$(".pop_form").fadeOut(300);
		$(".pop_thanks").fadeOut(300);
		$("#modal").fadeOut(300);	
	});
	$("#modal .str_right").click(function(){
		if(index<interier_kol){
			index++;
			$(".popimg").html('<img src="images/int/'+index+'.jpg">');
		};
	});
	$("#modal .str_left").click(function(){
		if(index>1){
			index--;
			$(".popimg").html('<img src="images/int/'+index+'.jpg">');
		};		
	});	
	$('.rab_container ul li img').mouseover(function(){
		$(this).stop().animate({'opacity':'1'},500);
	});
	$('.rab_container ul li img').mouseleave(function(){
		if($(this).width()<=130){$(this).stop().animate({'opacity':'0.6'},500)}
	});	
	$('.rab_container ul li').click(function(){
		$('.rab_container ul li').animate({'width':'130px','height':'110px','margin-left':'0','margin-top':'0','margin-right':'0'},200);
		$('.rab_container ul li img').stop().animate({'width':'130px','height':'110px','opacity':'0.6'},200);
		$('.rab_container ul li').css('z-index','50');
		$(this).css('z-index','100');
		$(this).stop().animate({'width':'180px','height':'160px','margin-left':'-25px','margin-top':'-25px','margin-right':'-25px'},200);
		$(this).children('img').stop().animate({'width':'180px','height':'160px','opacity':'1'},200);

		var item = $(this),
			contentItem = $('.slider-for'),
			itemPosition = item.index();
		console.log(itemPosition);
		contentItem.eq(itemPosition)
		.addClass('active')
		.siblings()
		.removeClass('active');
	});
	$('.rab_container .nav_left').click(function(){
		if(rab_sm>0){
			$('.rab_container ul').stop().animate({'margin-left':'+=130px'},500);
			rab_sm--;
		}		
	});
	$('.rab_container .nav_right').click(function(){
		if(rab_sm<rab_razn){
			$('.rab_container ul').stop().animate({'margin-left':'-=130px'},500);
			rab_sm++;
		};
	});	

	//SLIDER MASTERS WORKS
	$('.block7_items ul li').click(function(){
		$('.block7_items .active').animate({'background-color':'rgba(255,255,255,0.6)','color':'#000'},500).removeClass('active');
		$(this).addClass('active').css('background-color','rgba(255,255,255,0.6)').css('color:#fff');
		$('.block7_items .active').animate({'background-color':'#b540fe','color':'#fff'},500);

		var item = $(this),
			contentItem = $('.content-item'),
			itemPosition = item.index();

		contentItem.eq(itemPosition)
		.addClass('active-content')
		.siblings()
		.removeClass('active-content');
	});
	//BLOCK MASTERS WORKS
	// //  $('.slider-for').slick({
	// //   slidesToShow: 1,
	// //   slidesToScroll: 1,
	// //   arrows: false,
	// //   fade: true,
	// //   asNavFor: '#slider-nav'
	// // });
	// $('#slider-works').slick({
	//   slidesToShow: 9,
	//   slidesToScroll: 1,
	//   asNavFor: '.slider-for',
	//   dots: true,
	//   centerMode: true,
	//   focusOnSelect: true
	// });
	//BLOCK 6 SLIDER//
	$('.block6_slider').slick({
	   // setting-name: setting-value
	});
	//MODAL WINDOWS//
	$('#btn-ask').click(function(){
		$('#modal2').stop().fadeIn();
	});
	$('.btn-close').click(function(){
		$('#modal2').stop().fadeOut();
	});
	$('.enroll').click(function(){
		$('#modal4').stop().fadeIn();
	});
	$('#callback').click(function(){
		$('#modal3').stop().fadeIn();
	});
	$('.btn-enroll').click(function(){
		$('#modal1').stop().fadeIn();
	});
	
	$('.btn-close').click(function(){
		$('#modal1').stop().fadeOut();
		$('#modal2').stop().fadeOut();
		$('#modal3').stop().fadeOut();
		$('#modal4').stop().fadeOut();
		$('#modal5').stop().fadeOut();
	});
	$('.order').click(function(){
		$('#modal5').stop().fadeIn();
		$('#slider-ratush').slick({
	   // setting-name: setting-value
		});
	});

	// AJAX FORM
	$("#enroll_header").submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "Thanks.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#enroll_header").trigger("reset");
		});
		return false;
	});

	$("#booking-time-1").submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "Thanks.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#booking-time-1").trigger("reset");
		});
		return false;
	});
	$("#modal3_callback").submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "Thanks.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#modal3_callback").trigger("reset");
		});
		return false;
	});
	$("#modal4_enroll").submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "Thanks.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#modal4_enroll").trigger("reset");
		});
		return false;
	});
	$("#booking-time-2").submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "Thanks.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#booking-time-2").trigger("reset");
		});
		return false;
	});
	$("#form_ask").submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "Thanks.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form_ask").trigger("reset");
		});
		return false;
	});
	
	// $("#modal2_callback").submit(function(e) {
	// 	e.preventDefault();
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "Thanks.php",
	// 		data: $(this).serialize()
	// 	}).done(function() {
	// 		// alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
	// 		$('#modal3').stop().fadeOut();
	// 		$("#modal2_callback").trigger("reset");
	// 	});
	// 	return false;
	// });
	
	

});