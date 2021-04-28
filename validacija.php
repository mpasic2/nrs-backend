<?php
session_start();

$con = mysqli_connect('localhost','root','1234');
mysqli_select_db($con, 'registracija');
$name = $_POST['user'];
$pass = $_POST['password'];
$email = $_POST['email'];

$s= "select * from korisnici where ime ='$name' && pass='$pass'";
$result = mysqli_query($con, $s);
$num = mysqli_num_rows($result);

if($num==1){
    header('location:glavna.html');
} else {
    header('location:index.html');
}
?>