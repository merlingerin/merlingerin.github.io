﻿<?php
$recepient = "mq-9@outlook.com";
$sitename = "Travelinks";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \nПочта: $email";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");