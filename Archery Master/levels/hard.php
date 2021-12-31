<!DOCTYPE html>
<html>
    <head>
       <title>Bow and Arrow</title>
           <meta name="viewport" content="width=device-width, initial-scale=1" >
       <meta charset="utf-8">
    </head>
    <style type="text/css">
    #details{
    top: 0;
    position:absolute;
    text-align:right;
    font-size:20px;
    color:black;
    margin-left: 80%;
    font-weight: 500;
}
    </style>
        <?php include '../database/connection.php'?>
        <link rel="stylesheet" type="text/css" href="css/hard.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Finger+Paint&display=swap" rel="stylesheet">
    <body>
        <div id="alert">
        </div>
        <div id="mainContainer">
        <canvas id="myCanvas"></canvas>
        <canvas id="animCanvas"></canvas>
        <h1 id="score">0</h1>

        <div id="details">
        <p id="playerdetails" style="margin-right:10px;">PLAYER NAME: <?php echo $_SESSION['username']; ?></p>
        <p>SCORE:<span id="playerscore"> 0</span></p>
        </div>
        <div id="showPoint"><p id="arrs">&uarr;</p><span class="u">&uarr; +4</span></div>
        <div id="startMenu">

            <h1 id="title" style="color: green;">DIFFICUTY SELECTED: <span style="font-size:24px"></span><br>HARD<span style="font-size:24px"></span></h1>
            
            <a id="start">TAP TO START</a>
            <a href="../mainmenu.php">Main Menu</a><br>
            <a href="../selectdifficulty.php">Select Difficulty</a>
            <a type="button" id="btn" onclick="savescore()">Save Score</a>
            <h2>Your Name : <?php echo $_SESSION['username'];?></h2>
            <h2>Your HighScore <span id="best"> = 0</span></h2>
        </div>
    </div>
    </body>
    <script src="../js/hard.js"></script>
    <script type="text/javascript" src="jquery-3.6.0.min.js"></script>
</html>
