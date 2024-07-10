/*-------------------------------- Constants --------------------------------*/

const countries = [
  { name: "italy", hint: "Where spaghetti and meatballs roam free.", image: "./images/countries/italy.png" },
  { name: "australia", hint: "Where the kangaroos hop and the koalas nap.", image: "./images/countries/australia.png" },
  { name: "brazil", hint: "The land of football, Carnival, and really big trees.", image: "./images/countries/brazil.png" },
  { name: "egypt", hint: "Where the Nile runs wild and the pharaohs rule.", image: "./images/countries/egypt.png" },
  { name: "india", hint: "The spice-filled, curry-powered, elephant-riding wonderland.", image: "./images/countries/india.png" },
  { name: "norway", hint: "Where the fjords are deep, the Vikings are fierce, and the Northern Lights put on a show.", image: "./images/countries/norway.png" },
  { name: "japan", hint: "The land of sushi, samurai, and super-fast trains.", image: "./images/countries/japan.png" }
];
/*---------------------------- Variables (state) ----------------------------*/

let randomIndex = Math.floor(Math.random() * countries.length);
let randomC = countries[randomIndex];
let chance = 3;
let currentGuess = "";

/*------------------------ Cached Element References ------------------------*/

const input = document.querySelector('input');
const guess = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const hint = document.querySelector('.hint');
const countryImage = document.querySelector('.country-image');
const startBtn = document.querySelector('.start');

input.disabled = true;

/*-------------------------------- Functions --------------------------------*/

function checkCountry() {
  const inputValue = input.value.toLowerCase();

  if (inputValue) {
    if (inputValue === randomC.name) {
      currentGuess = randomC.name;
      guess.textContent = `Correct! You guessed the country "${currentGuess}" :)`;
      guess.style.color = "#71C64E";
      input.disabled = true;
      startBtn.disabled = false;
      startBtn.textContent = "Replay";
      hint.textContent = "";
      showImage();
    } else {
      chance--;
      input.value = "";
      guess.textContent = `Incorrect! Remaining chances: ${chance}`;
      guess.style.color = "#DE0611";
      showHint();
    }

    if (chance <= 0) {
      startBtn.disabled = false;
      startBtn.textContent = "Replay";
      input.disabled = true;
      checkBtn.disabled = true;
      guess.textContent = `The country was "${randomC.name}". You lost the game :(`;
      guess.style.color = "#DE0611";
      hint.textContent = "";
    }
  } else {
    input.focus();
  }
}

function reset() {
  randomIndex = Math.floor(Math.random() * countries.length);
  randomC = countries[randomIndex];
  chance = 3;
  currentGuess = "";
  input.disabled = true;
  input.value = "";
  guess.textContent = "";
  hint.textContent = "";
  checkBtn.disabled = false;
  startBtn.textContent = "Start";
  countryImage.style.display = "none";
  startBtn.disabled = false;
}

function showHint() {
  if (chance >=  2) {
    hint.textContent = `Hint: ${randomC.hint}`;
  } else {
    hint.textContent = `Hint: ${randomC.hint}`;
    showImage();
  }
}

function showImage() {
  countryImage.src = randomC.image;
  countryImage.style.display = "block";
}

function start() {
  guess.textContent = "";
  input.disabled = false;
  showHint();
  checkCountry();
  startBtn.disabled = true; 
}

/*----------------------------- Event Listeners -----------------------------*/

startBtn.addEventListener('click', function() {
  if (startBtn.textContent === "Replay") {
    reset();
  } else if (startBtn.textContent === "Start") {
    start();
  }
});

checkBtn.addEventListener("click", checkCountry);