<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Arrow Master</title>
</head>

<?php include 'links/bootstrap.php';
	  include 'links/fontawesome.php';
	  include 'database/connection.php';
?>
<link rel="stylesheet" type="text/css" href="css/mainmenu.css">

<body>
<div class="container">
	
	<div id="title">
		<img class="image" src="images/Untitled-1.png" alt="">	
	</div>
	<div class="row">
		<div class="col-6">
	<div id="inputname">
		<form method="POST" action="database/storeusername.php">
			<input type="text" name="playername" id="playername" placeholder="Enter player name"><br>
			<button type="submit" onclick="message()">Start Game</button><br>
			<a href="leaderboard.php">Leaderboards</a>
		</form>
		</div>
		</div>
	<div class="col-6">
		<div class="tablerow">
			<h1>Top three scorer</h1>
			<center>
		<table>
			<tr>
				<th>Player ID</th>
				<th>Player Name</th>
				<th>Player Score</th>
			</tr>
			<tr><?php
				while ($row = $result->fetch_assoc()):
				?>
				<td><?php echo $row["playerid"];?></td>
				<td><?php echo $row["playername"]; ?></td>
				<td><?php echo $row["playerscore"];?></td>
			</tr>
			<?php endwhile; ?>
		</table>
		</center>
		</div>
		</div>
	</div>
	</div>
</div>
<script type="text/javascript">
	function message(){
		var username = document.getElementById("playername");

		if(username.value == ""){
			alert("Please enter your name to save your score");
		}
	}
</script>
</body>
</html>