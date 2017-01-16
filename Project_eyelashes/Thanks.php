<?php
   $to = 'mq-9@outlook';
   $to_copy = 'un_cle_v@mail.ru';
   $name = ($_POST['name']);
   $tel = ($_POST['phone']);
   $subject = 'Order from '.$_SERVER['HTTP_REFERER'];
   $subject = "=?utf-8?b?". base64_encode($subject) ."?=";
   $message = "Name: ".$_POST['name']."\nTelephone: ".$_POST['phone']."\nExample: ".$_SERVER['REMOTE_ADDR'];
   $headers = 'From: ppamaker@merlingerin.zzz.com.ua'."\r\n";
   $headers .= 'Content-type: text/plain; charset="utf-8"';
   $headers .= "MIME-Version: 1.0\r\n .";
   $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
   // mail($to_copy, $subject, $message, $headers);
   mail($to, $subject, $message, $headers);
   // $msg = "Поздравляем! Ваш заказ принят!";

?>
