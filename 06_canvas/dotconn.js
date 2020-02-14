//Vishwaa Sofat & Ahmed Sultan -- #VIVACATALUNYA
//Softdev pd09
//K06 -- Dot Dot Dot
//2020-02-12

var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");

var curmode = "dot";

lx = null
ly = null

canvas.addEventListener("click", (e) => {
    console.log("here");
    currx = e.pageX - canvas.offsetLeft;
    curry = e.pageY - canvas.offsetTop;
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(currx, curry, 10, 0, 2 * Math.PI);
    ctx.fill();
    if(lx != null && ly != null){
      ctx.beginPath();
      ctx.moveTo(lx, ly);
      ctx.lineTo(currx, curry);
      ctx.stroke();
    }
    lx = currx;
    ly = curry;
});

document.getElementById("clear").addEventListener("click", () => {
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  lx = null;
  ly = null;
});
