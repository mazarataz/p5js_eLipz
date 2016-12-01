theCirc = {
  x: 100,
  y: 250
}

theCircCol = {
  r: 255,
  g: 50,
  b: 30
}

theCol = {
  r: 255,
  g: 50,
  b: 30,
}

function setup() {
  createCanvas(500, 500);
  background(255);
  
}

function draw() {
  
  //fill(theCircCol.r, 100, 135 , 100);
  noStroke();
  fill(255);
  ellipse(250, 250, 150, 150);
  
  for (var x = 0; x < width; x += 20) {
    noStroke();
    fill(theCol.r, 100, 135, 100);
    ellipse(x, theCirc.y, 25, 25);
    
    theCirc.y = random(0, height);
    theCol.r = map(theCirc.x, 125, 250, 60, 150);
    
  for (var y =0; y < width; y += 3) {
    fill(theCircCol.r, 100, 135, 160);
    noStroke();
    ellipse(theCirc.x, y, 5, 5);
    theCirc.x = random(0, width);
    theCircCol.r = map(theCirc.x, 125, 370, 180, 230);
  }
  
  fill(255);
  ellipse(250, 250, 150, 150);
   
  }
}