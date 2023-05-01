// Used to randomly select Rock, Paper, or Scissors
function getComputerChoice() {
    randomNumber = Math.floor((Math.random() * 3));
    let computerChoice;
    // Converts 0, 1, or 2 into Rock, Paper, or Scissors
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
    // Stores user and computer choices
    let computerChoice = getComputerChoice();
    let userChoice = this.textContent;
    // Reference to result division
    const result = document.querySelector('.result')
    // Changes text content of result division based on conditions
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

// Stores user and computer score
let userScore = 0;
let compScore = 0;

function war() {
  // References to divisions and restart button
  const result = document.querySelector('.result').textContent;
  const userPoints = document.querySelector('.userPoints');
  const computerPoints = document.querySelector('.computerPoints');
  const gameOver = document.querySelector('.gameOver');
  // Adds points to user or computer depending on condition
  if (result.includes('draw')) {
  } else if (result.includes('won')) {
      userScore += 1;
      userPoints.textContent = userScore;
  } else if (result.includes('lost')) {
      compScore += 1;
      computerPoints.textContent = compScore;
  }
  // Make restart button appear after user or computer gets to 5, and add a message indicating the winner
  if (userScore === 5) {
      gameOver.textContent = 'You have won the war! Your enemy has been defeated.'
      restartBtn.classList.remove('hidden');
  } else if (compScore === 5) {
      gameOver.textContent = 'You lost the war! The enemy has defeated you.'
      restartBtn.classList.remove('hidden');
  }
}

function restart() {
  if (1 === 1) {
    restartBtn.classList.add('hidden');
  }
}

const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', restart)

const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', playGame));
buttons.forEach(btn => btn.addEventListener('click', war));


