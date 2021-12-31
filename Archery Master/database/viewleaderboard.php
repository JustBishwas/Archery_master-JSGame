<?php
include 'connection.php';

$outcome = $conn->query("SELECT * FROM player ORDER BY playerscore DESC") or die($conn->error);

?>