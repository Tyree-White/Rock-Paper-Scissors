// Used to randomly select Rock, Paper, or Scissors.
function getComputerChoice() {
    randomNumber = Math.floor((Math.random() * 3));
    let computerChoice;
    // Converts 0, 1, or 2 into Rock, Paper, or Scissors.
    if (randomNumber === 0) {
      computerChoice = "ROCK";
    } else if (randomNumber === 1) {
      computerChoice = "PAPER";
    } else {
      computerChoice = "SCISSORS";
    }
    return computerChoice;
}

function playGame() {
    let computerChoice = getComputerChoice();
    let userChoice = this.value;
    const result = document.querySelector('.result')
    if (userChoice === computerChoice) {
        result.textContent = `The battle has resulted in a draw! Your enemy chose ${computerChoice}! You chose ${userChoice}!`;
    } else if (userChoice === "ROCK" && computerChoice === "SCISSORS") {
        result.textContent = `You have won the battle! Your enemy chose ${computerChoice}! You chose ${userChoice}!`;
    } else if (userChoice === "ROCK" && computerChoice === "PAPER"){
        result.textContent = `You lost the battle! Your enemy chose ${computerChoice}! You chose ${userChoice}!`;
    } else if (userChoice === "PAPER"  && computerChoice === "ROCK") {
        result.textContent = `You have won the battle! Your enemy chose ${computerChoice}! You chose ${userChoice}!`;
    } else if (userChoice === "PAPER" && computerChoice === "SCISSORS") {
        result.textContent = `You lost the battle! Your enemy chose ${computerChoice}! You chose ${userChoice}!`;
    } else if (userChoice === "SCISSORS" && computerChoice === "PAPER") {
        result.textContent = `You have won the battle! Your enemy chose ${computerChoice}! You chose ${userChoice}!`;
    } else if (userChoice === "SCISSORS" && computerChoice === "ROCK") {
        result.textContent = `You lost the battle! Your enemy chose ${computerChoice}! You chose ${userChoice}!`;
    }
}

let userScore = 0;
let compScore = 0;

function war() {
  const result = document.querySelector('.result').textContent;
  const userPoints = document.querySelector('.userPoints');
  const computerPoints = document.querySelector('.compPoints');

}

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(btn => btn.addEventListener('click', playGame));
buttons.forEach(btn => btn.addEventListener('click', war));


