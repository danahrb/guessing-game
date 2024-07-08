/*-------------------------------- Constants --------------------------------*/


const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

/*---------------------------- Variables (state) ----------------------------*/
let randomIndex = Math.floor(Math.random() * letters.length);
let randomLetter = letters[randomIndex];
let chance = 5; 
let currentGuess = "";

/*------------------------ Cached Element References ------------------------*/
const input = document.querySelector('input');
const guess = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');

/*-------------------------------- Functions --------------------------------*/
function checkLetter() {
    chance--;
    console.log(currentGuess)
    const inputValue = input.value.toLowerCase();
    if (inputValue === randomLetter) {
        currentGuess = randomLetter;
        guess.textContent = `Correct! You guessed the letter "${currentGuess}"`;
        input.disabled = true;
        checkBtn.textContent = "Replay";
    } else {
      input.value = "";
        guess.textContent = `Incorrect. Remaining chances: ${chance}`;
    }
    if (chance === 0) {
      checkBtn.textContent = "Replay";
      input.disabled = true;
      input.value = "";
      guess.textContent = `The letter was "${randomLetter}". You lost the game.`;
  }

}



/*----------------------------- Event Listeners -----------------------------*/
checkBtn.addEventListener("click", checkLetter);


// input.addEventListener("input", updateValue);

// function updateValue(e) {
//   let userinput = e.target.value;
//   console.log(userinput)
// }