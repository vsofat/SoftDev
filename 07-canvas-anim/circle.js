//Biraj Chowdhury, Vishwaa Sofat
// SoftDev1 pd9
// K7 -- ...They lock us in the tower whenever we get caught
// 2020-02-12

var c = document.getElementById("playground");
var anim = document.getElementById("animan");
var stop = document.getElementById("stop");
var ctx = c.getContext('2d');

var animationStarted = false;
var increase = true;
var radius = 0;

var circle = function(s){
  ctx.beginPath();
  ctx.arc(300,300, s, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
}

var lastReq = null;

var animate = function(time){
    animationStarted = true;
    if (radius >= 300){
        increase = false;
    }
    if (radius <= 0){
        increase = true;
    }
    if (increase){
        ctx.clearRect(0, 0, c.width, c.height);
        radius += 1;
        circle(radius);
    }
    else{
        ctx.clearRect(0, 0, c.width, c.height);
        radius -= 1;
        circle(radius);
    }
    lastReq = window.requestAnimationFrame(animate);
}

anim.addEventListener("click", function(){
	if (animationStarted == false){
		animationStarted = true;
		animate();
	}

});
stop.addEventListener("click",function(){
	animationStarted = false;
	window.cancelAnimationFrame(lastReq)
});
