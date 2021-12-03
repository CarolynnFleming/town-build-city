import { makeStatsString } from './utils.js';
const castleMenu = document.querySelector('#castle-menu');
console.log(castleMenu)
const skylineMenu = document.querySelector('#skyline-menu');
const waterfrontMenu = document.querySelector('#waterfront-menu');
const castleImageEl = document.querySelector('#castle-image');
const skylineImageEl = document.querySelector('#skyline-image');
const waterfrontImageEl = document.querySelector('#waterfront-image');
const sloganInput = document.querySelector('#slogan-input');
const sloganButton = document.querySelector('#slogan-button');
const sloganList = document.querySelector('.list');
const countEl = document.querySelector('.count');

let castleCount = 0;
let skylineCount = 0;
let waterfrontCount = 0;
let slogans = [];

castleMenu.addEventListener('change', () => {

    const id = castleMenu.value;

    castleImageEl.src = `./assets/${id}-castle.jpeg`

    castleCount++;

    displayStats();
});



skylineMenu.addEventListener('change', () => {
    
    const id = skylineMenu.value;

    skylineImageEl.src = `./assets/${id}-skyline.jpeg`;

    skylineCount++;

    displayStats();
});


waterfrontMenu.addEventListener('change', () => {
    
    const id = waterfrontMenu.value;
    
    waterfrontImageEl.src =`./assets/${id}-waterfront.jpeg`;

    waterfrontCount++;

    displayStats();
});

sloganButton.addEventListener('click', () =>{
    const changeSlogan = sloganInput.value;

    slogans.push(changeSlogan);

    displaySlogans();

});

function displaySlogans() {
    sloganList.textContent = '';

    for (let slogan of slogans) {
        const p = document.createElement('p');
        p.classList.add('slogan');
        p.textContent = slogan;
        sloganList.append(p);
    }
    sloganInput.value = '';
};

function displayStats() {

    countEl.textContent = `you've changed the castle ${castleCount} times, 
    you've changed the skyline ${skylineCount} times,
    you've changed the waterfront ${waterfrontCount} times`;
  }
const statString = makeStatsString();



// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
