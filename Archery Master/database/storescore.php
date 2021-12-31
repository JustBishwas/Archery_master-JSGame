<?php
include 'connection.php';

$username  = $_SESSION['username'];

$score = $_GET['myscore'];

$storeinsql = "INSERT INTO player (playername,playerscore) VALUES ('$username','$score')";
mysqli_query($conn, $storeinsql);

$_SESSION['playerscore'] = $score;

?>