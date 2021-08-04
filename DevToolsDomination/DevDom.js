const pageItems = {
    headline: document.getElementById('headline')
}

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}


const p = document.querySelector('p');
// Regular
console.log('hello');

// Interpolated
console.log('hello I am a %s string', 'Poop');
console.log('hello I am a %s string', 'Poop');

// Styled
console.log('%c I am some badass!', 'font-size: 50px; background: red;');

// warning!
console.warn('Hope You Saw This!');

// Error :|
console.error('stop everything!');

// Info
console.info('Crocodiles eat 3 - 4 people per year');

// Testing
console.assert(1 === 2, 'That is wrong!');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`I am a dog named, ${dog.name}`);
   console.log(`${dog.name} is ${dog.age * 7} dog years old`);
   console.groupEnd(`${dog.name}`);
});

// counting
console.count('Wes');
console.count('ASteve');
console.count('Wes');
console.count('ASteve');
console.count('Wes');
console.count('Wes');
console.count('ASteve');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/webos')
    .then(data => data.json())
    .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
});

console.table(dogs);

pageItems.headline.addEventListener('click', makeGreen);