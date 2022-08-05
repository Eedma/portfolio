let xOff = 1;
let yOff = 2;
let wdth = innerWidth - 25;

function setup() {
  let cnv = createCanvas(wdth, innerHeight);
  cnv.parent('sketch-holder')
}

function draw() {
  let xP = noise(xOff) * wdth;
  let yP = noise(yOff) * innerHeight;

  point(xP, yP)
  stroke('#FFF8F0')

  xOff += 0.01;
  yOff += 0.01;
}

