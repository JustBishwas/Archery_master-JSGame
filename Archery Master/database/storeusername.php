<?php
include 'connection.php';

$username = $_POST['playername'];



$_SESSION['username'] = $username;



header('location: ../selectdifficulty.php');
?>