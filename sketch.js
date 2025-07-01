var bello=0;


//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(6,bello,150); //an RGB color for the canvas' background
  //circle
  fill(212,203,24);
  stroke(300,255,127); // an RGB color for the circle's border
  strokeWeight(3);
  fill(2,12,26,235); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  rect(mouseX,mouseY,40,100); // center of canvas, 20px dia
  fill(mouseX,24,69);
  ellipse(random(width),random(height),20,20);
  stroke(230,230,70);
  ellipse(bello,250,mouseY,mouseY);
  stroke(212,203,24);
  line(bello,20,400,bello);
 
  strokeWeight(2);
  triangle(40,40,250,60,300,300,435);
  textSize(20);
  textFont("georgia");
  textStyle(ITALIC);
  textAlign(CENTER);
  text("hello",40,40);
  console.log(bello);

}

function mousePressed(){
  bello=bello+5
  if(bello>50){
    bello=0;
}else{
  bllo=bello+5;
}

  }
