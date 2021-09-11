let xOff = 1;
let yOff = 2;
let wdth = innerWidth - 25;
let hgth = innerHeight;

function setup() {
  let cnv = createCanvas(wdth, hgth);
  /* cnv.position(0,0) */
  cnv.parent('sketch-holder')
  /* background(222); */
}

function draw() {
  /* if (wdth > 1024){
    point(mouseX, mouseY)
  } */

  let xP = noise(xOff) * wdth;
  let yP = noise(yOff) * innerHeight;

  // maybe a random color?!
  point(xP, yP)

  xOff += 0.01;
  yOff += 0.01;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  /* background(222); */
}
