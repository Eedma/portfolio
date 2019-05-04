
function setup() {
    let myCanvas = createCanvas(window.innerWidth / 1.008, window.innerHeight / 1.008);
    myCanvas.parent('sketchPage');
    strokeWeight(8);
  }
  
  function draw() {
    background(255);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }