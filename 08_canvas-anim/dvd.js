//Biraj Chowdhury, Vishwaa Sofat
// SoftDev1 pd9
// K7 -- ...They lock us in the tower whenever we get caught
// 2020-02-12

var c = document.getElementById("playground");
var animanic = document.getElementById("animan");
var stop = document.getElementById("stop");
var dvd = document.getElementById("dvd");
var ctx = c.getContext('2d');

var animationStarted = false;
var lastReq = null;

var increase = true;
var radius = 0;

var dvdImage = new Image(1,1);
dvdImage.src = 'dvd.png';
//state variable to track whether image moves from left to right or right to left
var moveRight = true;
var x = 300;
var y = 400;
var m = 1.3;


var circle = function(x,y,s){
  ctx.beginPath();
  ctx.arc(x,y, s, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
}

var move = function(time){
    ctx.clearRect(0,0,c.width,c.height);
    if (x <= 0){
        moveRight = true;
        //m = -(1/m);
    }
    if (x >= 600){
        moveRight = false;
        //m = -(1/m);
    }
    if (y <= 0){
        if (m < 0){
            m = -(1/m);
        }
    }
    if (y >= 600){
        if (m > 0){
            m = -(1/m);
        }
    }
    y += m;
    if (moveRight){
        x += 1;
    }
    else{
        x -= 1;
    }
    //the last 2 parameters are very important, resizes image to your specifications
    ctx.drawImage(dvdImage,x - 20,y - 20,60,60);
    lastReq = requestAnimationFrame(move);
}

var animate = function(time){
    if (radius >= 300){
        increase = false;
    }
    if (radius <= 0){
        increase = true;
    }
    if (increase){
        ctx.clearRect(0, 0, c.width, c.height);
        radius += 1;
        circle(300,300,radius);
    }
    else{
        ctx.clearRect(0, 0, c.width, c.height);
        radius -= 1;
        circle(300,300,radius);
    }
    //callback function is the parameter for requestAnimationFrame()
    lastReq = window.requestAnimationFrame(animate);
}


animanic.addEventListener("click", function(){
    //ensures that multiple clicks on animate button don't speed up animation
	if (animationStarted == false){
		animationStarted = true;
		animate();
	}
});

dvd.addEventListener("click", function(){
	if (animationStarted == false){
		animationStarted = true;
		move();
	}
});

stop.addEventListener("click",function(){
	animationStarted = false;
	window.cancelAnimationFrame(lastReq)
});
