$(document).ready(function() {




  // drawRectangle();
  // drawCircle();
  // drawRectangleOutline();


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width * .5;
var y = canvas.height - 30;
var dx = -1;
var dy = -2;
var color = "blue"

function drawBall(color) {
  var ballRadius = 10;
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = color
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall(color);
  x += dx;
  y += dy;
  // subtract the ballRadius if we want change direction to happen on contact instead of at center of ball
  if (y + dy < 0 || y + dy > canvas.height) {
    dy = -dy;
    color = changeColor();
  }
  if (x + dx < 0 || x + dx > canvas.width) {
    dx = -dx;
  }
}

function changeColor(){
  var colors = ["#75bba0", "#ad382b", "#386133"]
  var num = Math.floor(Math.random() * colors.length);
  var color = colors[num]
  return color
}
setInterval(draw, 10);



})

function prepCanvas() {
  console.log("in prepCanvas function")
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
 }

function drawRectangle(){
  // How come I can't do this?
  // prepCanvas();
  // console.log(prepCanvas);
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.rect(20, 40, 50, 50);
  ctx.fillStyle = "#75bba0";
  ctx.fill();
  ctx.closePath();
}

function drawRectangleOutline(){
  ctx.beginPath();
  ctx.rect(160, 10, 100, 40);
  ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
  ctx.stroke();
  ctx.closePath();
}

function drawCircle() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  // prepCanvas();
  ctx.beginPath();
  ctx.arc(240, 160, 10, 0, Math.PI*2, false);
  ctx.fillStyle = "#ad382b"
  ctx.fill();
  ctx.closePath();
}
