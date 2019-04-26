let works = ['a developer', 'a designer', 'a photographer', 'a dreamer', 'a creative', 'a geek','a liar', 'a scientist', 'undecided', 'a pokémon trainer'];
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

myInterests = () => {
    itemIndex = (itemIndex + 1) % works.length;

    if (itemIndex == 0) {
        shuffleInterests();
    }

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
