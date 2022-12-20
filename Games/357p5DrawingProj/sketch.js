
let buttonColor;
let buttonShape;
let buttonSize;
let buttonRefresh;
let buttonColor2;
let buttonCircle;
let color = {R: 100, G:50, B:100};


let fr = 60;
let shape = 3;
let isDraw = false;
let radius = 6;
let angle = 0;


function setup() {
  createCanvas(800, 800);
  background(111);
  frameRate(fr);
  // deal with the color
  buttonColor = createButton('change BG');
  buttonColor.position(0, 0);
  buttonColor.mousePressed(changeBG);

  // deal with the shape
  buttonShape = createButton('change Brush');
  buttonShape.position(100,0);
  buttonShape.mousePressed(changeShape);
  
  // change the size
  buttonSize = createButton('change size');
  buttonSize.position(210,0);
  buttonSize.mousePressed(changeSize);
  
  buttonRefresh = createButton('refresh');
  buttonRefresh.position(320 ,0);
  buttonRefresh.mousePressed(clearCanvas);

  buttonColor2 = createButton('change Color');
  buttonColor2.position(400 ,0);
  buttonColor2.mousePressed(changeColor);
}


function draw() {
  frameRate(fr);
  rotate(angle);
  if(isDraw){
    draw_polygon(mouseX, mouseY, radius, shape, color);
  }
}



function setCircle(){
  circle = !circle; // toggle
}

function changeSize(){
  radius = int(random(8, 70));
}

function changeShape(){
  shape = shape < 3 || shape === 6 ? 3 : int((shape + 1) % 7);
}

function changeBG() {
  let val = random(255);
  background(val);
}

function clearCanvas(){
  clear();
  background(111);
}

function changeColor(){
  color.R = int(random(1,255));
  color.G = int(random(1,255));
  color.B = int(random(1,255));
}
/**
 * Mouse press event
 */
function mousePressed(){
  isDraw = true;
}

/**
 * Mouse release event
 */
function mouseReleased() {
  isDraw = false;
}


/**
 * Create Polygons from different shapes
 * @param {} x 
 * @param {*} y 
 * @param {*} radius 
 * @param {*} npoints 
 */
function draw_polygon(x, y, radius, npoints, color) {
  let angle = TWO_PI / npoints;
  fill(color.R, color.G, color.B);
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}