var xPos = 20;
var yPos = 20;
var d = 100;

var width, height;
var counter = 0;
var counter2 = "2";

function setup() {

  width = 1000;
  heigth = 300;

//print("salut");
  createCanvas(500,300);
  background(0);
  frameRate(23)
}

function draw() {

  fill(0,255,0);

  //rect(xPos,yPos,100,100);
  line(0,0,500,300);
  line(0,300,500,0)
  print("salut");


  ellipse(250,150,d,d);
  ellipse(50,50,d,d);
  ellipse(450,50,d,d);
  rect(100,250,300,30);
}
