(function () {

$(document).ready(function(){
    $("li").hover(
    	function(){
        	$(this).prev().css("border-radius", "0 50px  50px 0"),
        	$(this).next().css("border-radius", "50px 0 0 50px");
        }, 

        function(){
        $(this).prev().css("border-radius", " 0 0 0 0"),
        $(this).next().css("border-radius", " 0 0 0 0");
        });



});
	$(document).ready( function(){
    	if ($('li').first().css("border-radius") == '0px 0px 0px 0px') {
    		$(this).first().css("border-radius", "50px 0 0 50px");
    	}
    	    console.log($('li').first().css("border-radius"));
    });

})();


