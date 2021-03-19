var hr , min ,sec;

function setup() {
  createCanvas(400,400);
  createSprite(400, 200, 50, 50);


}

function draw() {
  background("black"); 
  angleMode(DEGREES);
  translate(200,200);
  rotate(-90);
  scAngle = map(sec,0,60,0,360); 
  hrAngle = map(hr,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hr = hour();
  min = minute();
  sec = second();
  // creating sec hand
  push();
  rotate(scAngle);
  stroke("#12ff05");
  strokeWeight(7);
  line(0,0,60,0);
  pop();

  // creating min hand
  push();
  rotate(minAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,40,0);
  pop();

  // creating hr hand 
  push();
  rotate(hrAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,30,0);
  pop();
  console.log(mouseX,mouseY);
  drawSprites();
  fill("grey");
  textSize(10);
  text("6",155,317);
}