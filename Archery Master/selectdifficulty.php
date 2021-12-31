<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Select difficulty</title>
</head>
<?php include 'database/connection.php'?>
<link rel="stylesheet" type="text/css" href="css/difficulty.css">
<link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css" rel="stylesheet">
<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"> 



<style type="text/css">

	body{
		overflow-x: hidden;
	}
</style>

<body>

	<div class="greetuser">
	<a href="mainmenu.php" style="text-decoration: none;color:black;font-size:40px;"><i class="icon-long-arrow-left" style="font-size:40px"></i><br>GO BACK</a>
	<h1 style="text-align: center; margin-top: 2%;font-size: 32px">
	Welcome <?php echo $_SESSION['username']; ?>, select the difficulty and read the instructions below:
	</h1>
	</div>

<div id="levels" style="margin-top:5%;margin-left: 5%;">
	<a class="easy" href="levels/easy.php"><span style="font-size:100px;" id="emoji">&#128554;</span><br>EASY</a>
	<a class="medium" href="levels/medium.php"><span style="font-size:100px;" id="emoji">&#128548;</span><br>MEDIUM</a>
	<a class="hard" href="levels/hard.php"><span style="font-size:100px;" id="emoji">&#128552;</span><br>HARD</a>
</div>
<div id="note" style="margin-top:3%">
	<div class="alert alert-primary" role="alert">
  		<h1>Note:</h1><br>
  		<ul>
        <li><h5>Arrows are limited</h5></li>
  		<li><h5>Closer you shoot the arrow to the center of the board you the more points you get</li>
  		<li><h5>Hit at exact center of the board to get an extra arrow</h5></li>
  		<h1 style="text-align:center;">Good Luck</h1>
  		</ul>
	</div>
</div>
</body>
</html>