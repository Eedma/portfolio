//animazione titolo
let works = ['a developer', 'a designer', 'a photographer', 'a dreamer', 'a creative', 'a geek', 'using cookies', 'undecided', 'a pokémon trainer'];
let placeItems = document.getElementById('placeItems');
let itemIndex = 0;

 shuffleInterests = () => {
     for (let i=0; i < 1000; ++i) {
         let w1 = (Math.random() * works.length)|0;
         let w2 = (Math.random() * works.length)|0;
         let t = works[w1];
         works[w1] = works[w2];
         works[w2] = t;
     }
 }
//shuffler works, but IDKW!

myInterests = () => {
    itemIndex = (itemIndex + 1) % works.length;
    // if (itemIndex == 0) {
    //     shuffleInterests();
    // }
    let item = works[itemIndex];
    placeItems.innerHTML = item;
}

let randomEl = setInterval(myInterests, 500);

start = () => {
    randomEl = setInterval(myInterests, 500);
}

stop = () => {
    clearInterval(randomEl);
}

//pointer

// set the starting position of the cursor outside of the screen
let clientX = -100;
let clientY = -100;
const innerCursor = document.querySelector(".cursor--small");
const outerCursor = document.querySelector(".cursor--large");

let lastPositions = [];

const initCursor = () => {

  
  // add listener to track the current mouse position
  document.addEventListener("mousemove", e => {
    clientX = e.clientX;
    clientY = e.clientY;

    lastPositions.push([clientX, clientY]);
  });
  
  // transform the innerCursor to the current mouse position
  // use requestAnimationFrame() for smooth performance
  const render = () => {
    innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;

    setInterval(
      function() {
        
        if (lastPositions && lastPositions.length > 0) {
        
          let lastPosition = lastPositions[0];
          lastPositions = lastPositions.slice(1);
  
          outerCursor.style.transform = `translate(${lastPosition[0]}px, ${lastPosition[1]}px)`;
  
        }
      }
      , 3
    )
    

    requestAnimationFrame(render);

  };
  
  requestAnimationFrame(render);
};

initCursor();
