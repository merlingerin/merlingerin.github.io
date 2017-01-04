<?php 
	$recepient = "mq-9@outlook.com";
	$sitename = "KDS Bisnes";

	$name = trim($_POST["name"]);
    $phone = trim($_POST["phone"]);
	$email = trim($_POST["email"]);
	$message = "Имя: $name \nТелефон: $phone \nТекст: $text";

    $pagetitle = "Новая заявка с \"$sitename\"";
    mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");