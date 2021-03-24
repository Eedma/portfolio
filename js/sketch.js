let xOff = 1;
let yOff = 2;

function setup() {
    let cnv = createCanvas(innerWidth, innerHeight);
    cnv.position(0,0)
    cnv.parent('sketch-holder')
    background(222);
  }
  
  function draw() {
    let xP = noise(xOff)* innerWidth;
    let yP = noise(yOff)* innerHeight;

    // maybe a random color?!
    stroke('black')
    point(xP,yP)

    xOff += 0.01;
    yOff += 0.01;
  }

