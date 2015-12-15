/**
 * Created by Administrator on 2015/12/10.
 */
var fontcanvas, context;
var array;
window.onload = function(){
    findCanvas();
//    drawRect();
//    drawImage();
//    drawpath();
//    drawGradient();
//    drawCrow();
//    drawcomposite();
    var myCircle = new MyCircle(150,150,100,1);
    array = myCircle.getCirclePoints();
    clearCircle(array, 30);
}

var x = 100, y = 100, recycleTimes = 0;
var clearCircle = function(){
    interval = setInterval(recycle, 10);
};
function recycle() {
    try {
        context.save();
        context.globalCompositeOperation = 'destination-out';
        context.beginPath();
        context.arc(array[recycleTimes].x, array[recycleTimes].y, 5, 0, 2 * Math.PI, false);
        context.fill();
        context.restore();
        recycleTimes++;
    } catch (exception){
        console.log(recycleTimes);
        clearInterval(interval);
    }
}

function findCanvas(){
    fontcanvas = document.getElementById("fontcanvas");
    context = fontcanvas.getContext("2d");
    context.fillStyle = "cornflowerblue";
    context.fillRect(0, 0, fontcanvas.width, fontcanvas.height);
}

function createCanvas(){
    document.body.innerHTML = "<canvas id='mycanvas' width='800px' height='800px'></canvas>";
    mycanvas = document.getElementById("mycanvas");
    context = mycanvas.getContext("2d");
}

function drawRect(){
    context.fillStyle = "rgb(200, 0 , 0)";
//    context.rotate(45);
    context.fillRect(200, 200, 400, 400);
}

function drawImage(){
    var img = new Image();
    img.onload = function(){
        context.drawImage(img, 0, 0);
//        context.globalCompositeOperation = "destination-in";
//        context.fillStyle = "blue";
//        context.fillRect(10,10,200,200);
//        drawCrow();
    }
    img.src = "小珊.jpg";
}

function drawpath(){
    for(var i =0;i<10;i++){
        context.beginPath();
        context.arc(i*25, i*25, i*10, 0, 360, false);
        context.closePath();
        context.fillStyle = "rgba(255,0,0,0.25)";
        context.stroke();
    }
}

function drawGradient(){
    var g1 = context.createLinearGradient(0, 0, 300, 300);
    g1.addColorStop(0, "rgb(0, 255, 255)");
    g1.addColorStop(1, "rgb(255,255,0)");
//    g1.addColorStop(2, "rgb(255,255,255)");
    context.fillStyle = g1;
    context.arc(100, 100, 100, 0, 360, false);
    context.fill();
}

function drawCrow(){
//    context.fillStyle = "rgba(255,0,0,0.25)";
//    context.fillRect(80, 50, 100, 100);
    context.translate(200, 80);
    intervalId = setInterval(clearCircle, 200);
//    clearCircle();
//    for(var i = 0; i<50; i++){
//        context.translate(25, 25);
//        context.rotate(Math.PI/10);
//        context.scale(0.95, 0.95);
//        context.clearRect(0, 0, 50, 100);
//    }
}

var num = 0;
function clearRect(){
    context.translate(25, 25);
    context.rotate(Math.PI/10);
    context.scale(0.95, 0.95);
    context.arc(0,0,100,0,360,false);
    context.clearRect(0, 0, 50, 100);
    num++;
    if(num == 50){
        clearInterval(intervalId);
    }
}

function drawcomposite(){
    var  array = new Array(
        "xor",
        "source-over",
        "destination-in",
        "source-in",
        "source-out",
        "destination-over",
        "destination-atop",
        "destination-in",
        "destination-out",
        "lighter",
        "copy",
        "source-over");



    context.translate(200, 80);
    for(var i = 0; i<50; i++){
        context.fillStyle = "green";
        context.translate(25, 25);
        context.rotate(Math.PI/10);
        context.scale(0.95, 0.95);
        context.fillRect(0, 0, 50, 100);
//        context.globalCompositeOperation = "destination-over";
    }
    for(var i = 0; i<50; i++){
        context.translate(-25, -25);
        context.rotate(-Math.PI/10);
        context.scale(1.05, 1.05);
    }
    context.translate(-700, -150);
    context.globalCompositeOperation = "source-in";
    drawImage();
//    context.globalCompositeOperation = "source-in";
//    for(var i = 0; i<1; i++){
        context.fillStyle = "red";
//        context.translate(25, 25);
//        context.rotate(Math.PI/10);
//        context.scale(0.95, 0.95);
        context.fillRect(0, 0, 50, 100);
//    }
//    context.fillStyle = "yellow";
//    context.fillRect(0, 0, 800, 800);
}