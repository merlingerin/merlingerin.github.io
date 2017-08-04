$(document).ready(function() {

	$(".form-grp").submit(function() {
		$.ajax({
			type: "GET",
			url: "Thanks.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
		});
		return false;
	});
	
});