window.onload = function(){

String.prototype.repeat =  String.prototype.repeat ||
  function(c){
    var r= '';
    for(var i=0; i<c; ++i);
        r += this;
    return r;
}

var asrcd = "toky";
var startPage = document.getElementById("startMenu");

var playerdetails = document.getElementById("playerdetails");
var playerscore = document.getElementById("playerscore");

var clicktoplay = document.getElementById("start");
clicktoplay.addEventListener("click",startGame);

function startGame(){
    startPage.style.display = "none";
    loadGame();
    try{
        startSound.play().catch(function(e){});
        if(bgSound.paused) bgSound.play().catch(function(e){});
        if(runCount == 0){
        endSound.play().catch(function(e){})
        hitSound.play().catch(function(e){});
        highScoreSound.play().catch(function(e){});
        runCount++;
        }
    }catch(err){}
    
}
        
var bestScore = 0;
var runCount = 0;
        
var startSound = new Audio();
startSound.src = "../audio/sfx_point.wav";
startSound.volume = 0.5;
        
var shootSound = new Audio();
shootSound.src = "../audio/Arrow+Swoosh+1.wav";
startSound.volume = 0.5;
        
var hitSound = new Audio();
hitSound.src = "../audio/sfx_hit.wav";
        
var bgSound = new Audio();
bgSound.src = "../audio/suspense.mp3";
bgSound.loop = true;
//bgSound.volume = 0.8;
        
var endSound = new Audio();
endSound.src = "../audio/applause2.wav";
endSound.volume = 0.5;
        
var highScoreSound = new Audio();
highScoreSound.src = "../audio/applause2.wav";
startSound.volume = 0.5;
        

function loadGame(){
"use strict";

    var gameScore = document.getElementById("score");
    var playerScore = document.getElementById("playerscore");
    var totalScore = 0;
    var autoMove = false;


    var w = window.innerWidth;
    var h = window.innerHeight;

    if(h > w){
        document.getElementById("mainContainer").style.transform = "translateX("+(w)+"px) rotate(90deg)";
        document.getElementById("mainContainer").style.width = h+"px";
        var nh = h;
        h = w;
        w = nh;
        
    }
    

    var updatePointArea = document.getElementById("showPoint");
    updatePointArea.style.height = h+"px";
    updatePointArea.style.width = w+"px";
    var uScore = document.querySelector("#showPoint .u");
    var arrs = document.getElementById("arrs");

    function updArr(arrNum){
        var arr = "<span style='color:brown; font-size:40px;'>&uarr;</span>";
        arr = arr.repeat(arrNum);
        arrs.innerHTML = arr;
    }

    //make changes here for animate scores
    function animateScore(scr,arrNum){
        if(scr >= 7) {
        uScore.innerHTML = "<h2>BULLS EYE</h2> + " +scr;
        }
        else uScore.innerHTML = "<h3>NICE SHOT</h3> + "+scr;
        updArr(arrNum);
        var t = 50, l = 70, o = 1;
        var animIntv = setInterval(function(){
            uScore.style.top = t + "%";
            uScore.style.left = l + "%";
            uScore.style.opacity = o;
            t-=4;
            l-=3;
            o-=0.1;
        },100)
        setTimeout(function(){
            clearInterval(animIntv);
            uScore.style.opacity = 0;
            uScore.style.top = "50%";
            uScore.style.left = "70%";
        },1000);
    }


    var c2 = document.getElementById("animCanvas");
    c2.height = h;
    c2.width = w;
    var ctx2 = c2.getContext("2d");

    var fwBuilder = function(n,x,y,speed){
        this.n = n;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.balls = [];
    }

    fwBuilder.prototype.ready = function(){
        for(var i = 0; i < this.n; i++){
            this.balls[i] = {
                x:this.x,
                y:this.y,
                dx:this.speed*Math.sin(i*Math.PI*2/this.n),
                dy:this.speed*Math.cos(i*Math.PI*2/this.n),
                u:this.speed*Math.cos(i*Math.PI*2/this.n),
                t:0
            }
        }
    }

    var fw1 = new fwBuilder(50,w/5,h,3);
    var fw2 = new fwBuilder(50,4*w/5,h,3);

    var intvA;
    var running = false;

    function newF(){
        if(!running){
            fw1.ready();
            fw2.ready();
            running = true;
            intvA = setInterval(function(){
                ctx2.clearRect(0,0,w,h);
                fw1.draw();
                fw2.draw();
            },15)
        }
    }

    newF();
    //c2.addEventListener("click",newF)
    

    var c = document.getElementById("myCanvas");

    c.height = h;
    c.width = w;

    var ctx = c.getContext("2d");

    var checkArrowMoveWithBoard1 = false;
    var checkArrowMoveWithBoard2 = false;

    // Objects...

    var arc = {
        x:30,
        y:100,
        dy:3,
          r:50,
          color:"brown", //bow color
          lw:3,
          start:Math.PI+Math.PI/2,
          end:Math.PI-Math.PI/2
    }

    var rope = {
        h:arc.r*3,
          lw:4,
          x:arc.x-20,
          color:"green", //rope color
          status:true
    }
    //board height width 
    var board = {
        x:w-40,
        y:h/2,
        dy:4,
        height:150,
        width:10
    }

    var boardY;
    var boardMove = false;
    var totalArr = 10;
    updArr(totalArr);

    function drawBoard() {
        ctx.beginPath();
        ctx.fillRect(board.x,board.y-5,40,board.width+5);
        ctx.fillRect(board.x,board.y-board.height/2,board.width,board.height);
        ctx.moveTo(board.x,board.y-30);
        ctx.quadraticCurveTo(board.x-20,board.y,board.x,board.y+40);
        // ctx.lineTo(10,6);

        //board color
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
        ctx.fillStyle = "brown";
    
        if(board.y >= h || board.y <= 0){
            board.dy *= -1;
        }
    
    
        if(autoMove){
            board.y += board.dy;
            if(checkArrowMoveWithBoard1){
                arrow1.moveArrowWithBoard(2);
            }
            else if(checkArrowMoveWithBoard2){
                arrow2.moveArrowWithBoard(2);
            }
        }
        else{
    
            if(boardMove){
                if(Math.abs(board.y - boardY) > 5){
                    board.y += board.dy;
                    arrow1.moveArrowWithBoard(2);
                    arrow2.moveArrowWithBoard(2);
                }
            }
            else{
                if(Math.abs(board.y - boardY) > 5){
                    board.y -= board.dy;
                    arrow1.moveArrowWithBoard(-2);
                    arrow2.moveArrowWithBoard(-2);
                }
            }
        }
    }
    function Arrow(){
        this.w = 85;
        this.x = arc.x-25;
        this.dx = 20;
        this.status = false;
        this.vis = true;
        this.fy = arc.y;
    }

    Arrow.prototype.drawArrow = function() {
        if(this.vis) {
            if(this.status) {
                ctx.fillRect(this.x,this.fy-3,30,6);
                ctx.fillRect(this.x,this.fy-1,this.w,2);
                ctx.beginPath();
                ctx.moveTo(this.x+this.w,this.fy-4);
                ctx.lineTo(this.x+this.w+12,this.fy);
                ctx.lineTo(this.x+this.w,this.fy+4);
                ctx.fill();
            
                if(moveArrowCheck) {
                    if(this.x < w-155){
                        this.x += this.dx;
                    }
                    else {
                        if(!(this.fy <= board.y-board.height/2 || this.fy >= board.y+board.height/2) || this.x > w){
                            if(this.x > w-110){
                                if(this == arrow1){
                                    arrow2.vis = true;
                                    checkArrowMoveWithBoard1 = true;
                                    checkArrowMoveWithBoard2 = false;
                                }
                                else {
                                    arrow1.vis = true;
                                    checkArrowMoveWithBoard1 = false;
                                    checkArrowMoveWithBoard2 = true;
                                }
                                moveArrowCheck = false;
                                score++;
                                //console.log(score);

                                //boost bow up and down speed if hit=4 
                                if(score === 3){
                                    arc.dy = 4;
                                    arc.dx = 5
                                }
                                else if(score === 5){
                                    arc.dy = 7;
                                    arc.dx = 8
                                }

                                //boardmove false after score hits +8
                                else if(score === 8){
                                    autoMove = false;
                                }
                        
                        
                                if(this.fy >= board.y-board.height/2 && this.fy <= board.y+board.height/2) {
            try{
                                    hitSound.play().catch(function(e){});
            }catch(err){}
                                    var scores = this.fy - board.y;
                                    var currentScore = Math.round(board.height/20)-Math.round(Math.abs(scores/10));
                                    if(currentScore >= 7){
                                        newF();
                                        totalArr+=1;
                                }
                            
                                totalScore += currentScore;
                                gameScore.innerHTML = totalScore;
                                playerScore.innerHTML = totalScore;
                            
                                animateScore(currentScore,totalArr,playerScore);
                            
                                //board.y += scores;// + Math.floor(Math.random()*20);
                                boardY = board.y + scores;
                                if(scores>=0){
                                    boardMove = true;
                                }
                                else {
                                    boardMove = false;
                                }
                            
                                //this.fy += scores;
                            }
                            else updArr(totalArr);
                                if(totalArr <= 0){
                                    clearInterval(intv);
                                    try{
                                        //bgSound.pause();
                                        endSound.play().catch(function(e){});
                                    }catch(err){
                                }
                                document.getElementById("animCanvas").removeEventListener("click",shoot);
                                document.body.removeEventListener("keydown",shoot);
                                startPage.style.display = "block";
                                document.getElementById("title").innerHTML = "Your Score<br>"+totalScore;
                                if(bestScore < totalScore){
                                    bestScore = totalScore;
                                    try{
                                        highScoreSound.play().catch(function(e){});
                                    }catch(err){
                                }
                            }
                            document.getElementById("score").innerHTML = 0;
                            document.getElementById("best").innerHTML = " = "+bestScore;
                            window.value = +bestScore;
                            }
                        
                            }
                            else {
                                this.x += this.dx;
                            }
                        }
                        else {
                            this.x += this.dx;
                        }
                    }
                }
            }
            else {
                ctx.fillRect(rope.x,arc.y-3,10,6);
                ctx.fillRect(rope.x,arc.y-1,this.w,2);
                ctx.beginPath();
                ctx.moveTo(rope.x+this.w,arc.y-4);
                ctx.lineTo(rope.x+this.w+12,arc.y);
                ctx.lineTo(rope.x+this.w,arc.y+4);
                ctx.fill();
            }
        }
    }

    //Arrow Move With Board

    Arrow.prototype.moveArrowWithBoard = function(dir) {
        if(this == arrow1){
            arrow1.fy += board.dy*dir;
        }
        else {
            arrow2.fy += board.dy*dir;
        }
    }




    var arrow1 = new Arrow();
    var arrow2 = new Arrow();

    var arrows = 0;
    var moveArrowCheck = false;
    var score = 0;

    // Drawing functions...

    function drawArc() {
        ctx.beginPath();
          ctx.arc(arc.x,arc.y,arc.r,arc.start,arc.end);
          ctx.strokeStyle = arc.color;
          ctx.lineWidth = arc.lw;
          ctx.stroke();
          ctx.closePath();
    }

    function drawRope() {
        ctx.beginPath();
          ctx.moveTo(arc.x,arc.y-arc.r);
          if(arrow1.vis && arrow2.vis){
            ctx.lineTo(rope.x,arc.y);
          }
          ctx.lineTo(arc.x,arc.y+arc.r);
          ctx.lineWidth = rope.lw;
          ctx.strokeStyle = rope.color;
          ctx.stroke();
          ctx.closePath();
    }

    // Moving function...

    function move () {
          ctx.clearRect(0,0,w,h);
          if(arc.y>h-50 || arc.y<50){
            arc.dy*=-1;
          }
          arc.y+=arc.dy;
    }

    function shoot(){
          if(arrow1.vis && arrow2.vis && arrows != -1){
            moveArrowCheck = true;
            if(arrows%2===0){
                  arrow1.status = true;
                  arrow1.fy = arc.y;
                  arrow2.status = false;
                  arrow2.x = rope.x;
                  arrow2.vis = false;
                }
            else{
                  arrow1.status = false;
                  arrow2.fy = arc.y;
                  arrow2.status = true;
                  arrow1.x = rope.x;
                  arrow1.vis = false;
            }
            totalArr--;
            try{
                shootSound.play().catch(function(e){});
                }catch(err){}
          }
          arrows++;
    }

    document.getElementById("animCanvas").addEventListener("click",shoot);

    var intv = setInterval(function(){
          move();
          drawArc();
          drawRope();
          arrow1.drawArrow();
          arrow2.drawArrow();
          drawBoard();
    },15)
}
}

function savescore()
        {
           var myscore = window.value;
           var payload = {"myscore" : window.value };

           $.get('../database/storescore.php', payload, function(response) {
            alert('Score Saved!');
            });
       }
