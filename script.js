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

function war() {
  let userPoints = 0;
  let computerPoints = 0;
  // Loops through playGame() function 5 times.
  for (let i = 0; i < 5; i++) {
      let battleResult = playGame();
      // Checks if the user drew, won, or lost and gives points depending on result.
      if (battleResult.includes("draw")) {
        userPoints += 1;
        computerPoints += 1;
        alert(`Round ${i+1} ${battleResult} You and you're opponent have been awarded one point! You have ${userPoints} points. You're opponent has ${computerPoints} points.`);
      } else if (battleResult.includes("won")) {
        userPoints += 1;
        alert(`Round ${i+1} ${battleResult} You have been awarded one point! You have ${userPoints} points. You're opponent has ${computerPoints} points.`);
      } else {
        computerPoints +=1;
        alert(`Round ${i+1} ${battleResult} You're opponent has been awarded one point! You have ${userPoints} points. You're opponent has ${computerPoints} points.`);
      }
      // Gives result of 5 round game by comparing user and computer points.
      if (i === 4 && userPoints === computerPoints) {
        alert("Game Over! The war has ended in a stalemate neither you or you're opponent has won nor lost.");
      } else if (i === 4 && userPoints > computerPoints) {
        alert("Game Over! You have won the war.");
      } else if (i === 4){
        alert("Game Over! You have lost the war.")
      }
  }
}

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(btn => btn.addEventListener('click', war));