alert("Meme alert");

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(0, 0, 0);
// }

// function draw() {
//   fill(random(255),random(255), random(255));
//   let xpos = random(windowWidth);
//   let ypos = random(windowHeight);
//   ellipse (xpos, ypos, 10, 10);
// } 

const NUM_DOTS = 100;
const LINK_THRESHOLD = 200;
let xposArray = [];
let yposArray = [];
let xdirArray = [];
let ydirArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Populate all arrays
  for (let i = 0; i < NUM_DOTS; i++) {
    // TO-DO: Add random x-location (0, width) to xposArray
    xposArray.push(random(0,width));
    // TO-DO: Add a random y-location (0, height) to yposArray
    yposArray[i]=random(0,height);
    // TO-DO: Add a random x-direction (-1, 1) to xdirArray
    xdirArray[i]=random(-1,1);
    // TO-DO: Add a random y-direction (-1, 1) to ydirArray
    ydirArray[i]=random(-1,1);
  }
}

function draw() {
  background(30);
  // For each ball
  for (let i = 0; i < xposArray.length; i++) {
    // TO-DO: Check distance against all other balls
    for (let j = 0; j < xposArray.length; j++) {
      dist =calcDistance (xposArray[i],yposArray[i],xposArray[j],yposArray[j]);
      if (dist<LINK_THRESHOLD){
        lineColor=255-255*(dist/LINK_THRESHOLD)
        stroke(lineColor,70,70)
        line(xposArray[i],yposArray[i],xposArray[j],yposArray[j]);
      }
    }
    // TO-DO: Update position of this ball
    xposArray[i] = xposArray[i] + xdirArray [i];
    yposArray[i] = yposArray[i] + ydirArray [i];
    // TO-DO: If the ball has hit the borders, bounce
    if(xposArray[i]<0||xposArray[i]>width){
      xdirArray[i]=-xdirArray[i];
    }
    if(yposArray[i]<0||yposArray[i]>height){
      ydirArray[i]=-ydirArray[i];
    }
  }
}

function calcDistance(x1, y1, x2, y2) {
  let dist = sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  return dist;
}