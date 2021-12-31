<?php

session_start();

//database details
$host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "arrowmaster";

//creating a connection
$conn = mysqli_connect($host,$db_user,$db_pass,$db_name);

// Check connection

 if ($conn->connect_error) {

    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM player ORDER BY playerscore DESC limit 3";
$result = mysqli_query($conn, $sql);

?>