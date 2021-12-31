<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>LeaderBoard</title>
</head>
	
	<link rel="stylesheet" type="text/css" href="css/blacktable.css">
	<link href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,700' rel='stylesheet' type='text/css'>

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

<?php include 'links/bootstrap.php';
	  include 'database/viewleaderboard.php';
?>
<body>
		<section class="ftco-section">
		<div class="container">
		<a href="mainmenu.php" style="text-decoration: none;color:black;font-size:40px;"><i class="icon-long-arrow-left" style="font-size:40px"></i><br>Main Menu</a>
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h2 class="heading-section">Leaderboard</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="table-wrap">
						<table class="table table-bordered ">
						  <thead class="table-dark " >
						    <tr>
						      <th>Player ID</th>
						      <th>Player Name</th>
						      <th>Player Score</th>
						    </tr>
						  </thead>
						  		<?php
									while ($row = $outcome->fetch_assoc()):
								?>
						  <tbody class="table-light">
						    <tr>
						      <td scope="row"><?php echo $row["playerid"];?></td>
						      <td><?php echo $row["playername"]; ?></td>
						      <td><?php echo $row["playerscore"];?></td>
						    </tr>
						    <tr>
						  </tbody>
						  <?php endwhile; ?>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>

  <script src="js/jquery.min.js"></script>
</body>
</html>