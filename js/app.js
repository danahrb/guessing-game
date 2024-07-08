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
const hint = document.querySelector('.hint');

/*-------------------------------- Functions --------------------------------*/
function checkLetter() {
    chance--;

    const inputValue = input.value;
    if(inputValue)
      {
    if (inputValue === randomLetter) {
        currentGuess = randomLetter;
        guess.textContent = `Correct! You guessed the letter "${currentGuess}" :)`;
        guess.style.color = "#71C64E";
        input.disabled = true;
        checkBtn.textContent = "Replay";
        reset();
    } 
    else {
      input.value = "";
        guess.textContent = `Incorrect! Remaining chances: ${chance}`;
        guess.style.color = "#DE0611";
        showHint();
    }
    
    if (chance === 0) {
      checkBtn.textContent = "Replay";
      input.value = "";
      guess.textContent = `The letter was "${randomLetter}". You lost the game :(`;
      guess.style.color="#DE0611";
      hint.textContent="";
      reset();
  }
    }
}

function reset(){

}

function showHint(){
  hint.textContent = `The order of the current letter is ${randomIndex + 1}`;
}


/*----------------------------- Event Listeners -----------------------------*/
checkBtn.addEventListener("click", checkLetter);


// input.addEventListener("input", updateValue);

// function updateValue(e) {
//   let userinput = e.target.value;
//   console.log(userinput)
// }
