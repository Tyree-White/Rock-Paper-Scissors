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

function playGame(e) {
    let computerChoice = getComputerChoice();
    let userChoice = e.srcElement.value;
    if (userChoice === computerChoice) {
      return `The battle has resulted in a draw! Your enemy chose ${computerChoice}! You chose ${userChoice}!`;
    }
    if (userChoice === "ROCK" && computerChoice === "SCISSORS") {
        return `You have won the battle! Your enemy chose ${computerChoice}! You chose ${userChoice}!`;
    } else if (userChoice === "ROCK" && computerChoice === "PAPER"){
        return `You lost the battle! Your enemy chose ${computerChoice}! You chose ${userChoice}!`;
    } else if (userChoice === "PAPER"  && computerChoice === "ROCK") {
        return `You have won the battle! Your enemy chose ${computerChoice}! You chose ${userChoice}!`;
    } else if (userChoice === "PAPER" && computerChoice === "SCISSORS") {
        return `You lost the battle! Your enemy chose ${computerChoice}! You chose ${userChoice}!`;
    } else if (userChoice === "SCISSORS" && computerChoice === "PAPER") {
        return `You have won the battle! Your enemy chose ${computerChoice}! You chose ${userChoice}!`;
    } else if (userChoice === "SCISSORS" && computerChoice === "ROCK") {
        return `You lost the battle! Your enemy chose ${computerChoice}! You chose ${userChoice}!`;
    }
}

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(btn => btn.addEventListener('click', playGame));

