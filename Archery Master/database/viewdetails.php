<?php
include 'database/connection.php';

$sql = "SELECT * FROM player";
$result = mysqli_query($conn, $sql);
?>