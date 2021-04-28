<?php
session_start();

$con = mysqli_connect('localhost','root','1234');
mysqli_select_db($con, 'registracija');
$name = $_POST['user'];
$pass = $_POST['password'];
$email = $_POST['email'];

$s= "select * from korisnici where ime ='$name'";
$result = mysqli_query($con, $s);
$num = mysqli_num_rows($result);

if($num==1){
    echo "Korisničko ime već postoji.";
} else {
    $reg="insert into korisnici(ime, pass, email) values ('$name', '$pass', '$email')";
    mysqli_query($con,$reg);
    echo "Uspješna registracija.";
    header('location:glavna.html');
}
?>