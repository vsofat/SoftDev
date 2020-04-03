var svg = document.getElementById("vimage");
var cl = document.getElementById("clear");
var mv = document.getElementById("move");
var xt = document.getElementById("xtra");

var requestID = 0;
var radius = 10;
var bounce = false;
var movehuh =false;
var draw = function(e) {
  if (e.target == svg) {
    //console.log(e.target)
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var x = e.offsetX;
    var y = e.offsetY;
    var angle = Math.floor(Math.random() * 360);
    var speed = 3;
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", radius);
    c.setAttribute("fill", "blue");
    c.setAttribute("stroke", "black");
    c.setAttribute("vx", speed*Math.cos(angle*Math.PI/180));
    c.setAttribute("vy", speed*Math.sin(angle*Math.PI/180));
    c.addEventListener('click', circle);
    svg.appendChild(c);
  }
}

var circle = function(e){
  if (e.target.getAttribute("fill") == "blue"){
    e.target.setAttribute("fill", "violet");
  }
  else if (e.target.getAttribute("fill") == "violet") {
    var x = Math.floor(Math.random() * 500);
    var y = Math.floor(Math.random() * 500);
    e.target.setAttribute("cx", x);
    e.target.setAttribute("cy", y);
    e.target.setAttribute("fill", "blue");
  }
}

var move = function() {
  var circles = document.getElementsByTagName("circle");
  //console.log(circles);
  for (var i = 0; i < circles.length; i++) {
    var cir = circles[i];
    //console.log(typeof cir.getAttribute("cx"));
    var x = parseInt(cir.getAttribute("cx"));
    var y = parseInt(cir.getAttribute("cy"));
    var vx = parseInt(cir.getAttribute("vx"));
    var vy = parseInt(cir.getAttribute("vy"));
    x += vx;
    y += vy;
    cir.setAttribute("cx", x);
    cir.setAttribute("cy", y);
    // console.log(typeof svg.getAttribute("width"));
    if (x > parseInt(svg.getAttribute("width")) - radius) {
      cir.setAttribute("vx", -vx);
      vx = -vx;

    } else if (x < radius) {
      cir.setAttribute("vx", -vx);
      vx = -vx;
    }
    if (y > parseInt(svg.getAttribute("height")) - radius) {
      cir.setAttribute("vy", -vy);
      vy = -vy;
    } else if (y < radius) {
      cir.setAttribute("vy", -vy);
      vy = -vy;
    }

  }
  if (requestID != 0) {
    requestID = window.requestAnimationFrame(move);
  }
  if(bounce){
    bounceballs();
  }

};

var collision = function(ball1, ball2){
  //checks how close the balls are together and if they are touching, they are colliding
  var oneX= parseInt(ball1.getAttribute("cx"));
  var oneY= parseInt(ball1.getAttribute("cy"));
  var twoX= parseInt(ball2.getAttribute("cx"));
  var twoY= parseInt(ball2.getAttribute("cy"));
  if(Math.sqrt(Math.pow((twoX - oneX),2) + Math.pow((twoY - oneY),2)) < radius * 2){
    return true;
  }
  return false;
};

var bounceballs = function(){
  var circles = document.getElementsByTagName("circle");
  for (var i = 0; i < circles.length; i++) {
    for (var j = i + 1; j < circles.length; j++){
      var oneX= parseInt(circles[i].getAttribute("cx"));
      var oneY= parseInt(circles[i].getAttribute("cy"));
      var twoX= parseInt(circles[j].getAttribute("cx"));
      var twoY= parseInt(circles[j].getAttribute("cy"));
      var dx = parseInt(circles[j].getAttribute("cx")) - parseInt(circles[i].getAttribute("cx"));
      var dy = parseInt(circles[j].getAttribute("cy")) - parseInt(circles[i].getAttribute("cy"));
      var dist = Math.sqrt(dx * dx + dy * dy);
      if(collision(circles[i], circles[j])){
        //the balls must have some type of surface to push off of
        var constraintX = dx / dist; //treat as if we bouncing off a slanted floor
        var constraintY = dy / dist;
        var mdpntX = (parseInt(circles[j].getAttribute("cx")) + parseInt(circles[i].getAttribute("cx"))) / 2;
        var mdpntY = (parseInt(circles[j].getAttribute("cy")) + parseInt(circles[i].getAttribute("cy"))) / 2;
        //bounce back
        circles[i].setAttribute("cx", mdpntX - constraintX * radius);
        circles[i].setAttribute("cy", mdpntY - constraintY * radius);
        circles[j].setAttribute("cx", mdpntX + constraintX * radius);
        circles[j].setAttribute("cy", mdpntY + constraintY * radius);
        var dVec = (parseInt(circles[i].getAttribute("vx")) - parseInt(circles[j].getAttribute("vx"))) * constraintX;
        dVec += (parseInt(circles[i].getAttribute("vy")) - parseInt(circles[j].getAttribute("vy"))) * constraintY;
        var dvx = dVec * constraintX;
        var dvy = dVec * constraintY;
        circles[i].setAttribute("vx", parseInt(circles[i].getAttribute("vx")) - dvx);
        circles[i].setAttribute("vy", parseInt(circles[i].getAttribute("vy")) - dvy);
        circles[j].setAttribute("vx", parseInt(circles[j].getAttribute("vx")) + dvx);
        circles[j].setAttribute("vy", parseInt(circles[j].getAttribute("vy")) + dvy);
      }
    }
  }
};

var clear = function(e){
  while (svg.lastChild){
    svg.removeChild(svg.lastChild);
  }
};

cl.addEventListener('click', clear);
svg.addEventListener('click', draw);
mv.addEventListener('click', function(e) {
  movehuh = !movehuh;
  if(movehuh == false){
    requestID = 0;
  }else{
    bounce =false;
    window.cancelAnimationFrame(requestID);
    requestID = window.requestAnimationFrame(move);
  }
});

xt.addEventListener('click', function(e) {
  bounce = !bounce;
});
