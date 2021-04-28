<?php
$name=$_POST['name'];
$email_posjetioca=$_POST['email'];
$message =$_POST['message'];

$email_od = 'mpatkovic1@etf.unsa.ba';
$email_subject = "Poruka";
$email_body = "Korisnik: $name.\n".
               "Email: $email_posjetioca.\n".
                "Poruka: $message.\n";

                $to = "akarahasan4@etf.unsa.ba";
                $headers = "Od: $email_od \r\n";
                $headers .= "Reply-To: $email_posjetioca \r\n";
                mail($to, $email_subject,$email_body,$headers);
                header("Location: glavna.html");