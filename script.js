function getComputerChoice() {
    randomNumber = Math.floor((Math.random() * 3));
    let computerChoice;
    if (randomNumber === 0) {
      computerChoice = "ROCK";
    } else if (randomNumber === 1) {
      computerChoice = "PAPER";
    } else {
      computerChoice = "SCISSORS";
    }
    return computerChoice;
}

function getUserChoice() {
    let userChoice = prompt("Type your weapon of choice! (Rock/Paper/Scissors)").toUpperCase();
    if (userChoice === "ROCK") {
    } else if (userChoice === "PAPER") {
    } else if (userChoice === "SCISSORS") {
    } else {
      alert("Sorry, but this weapon is not in your arsenal.")
    }
    return userChoice;
}

function playGame() {
    let computerChoice = getComputerChoice();
    let userChoice = getUserChoice();
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

function war() {
    let userPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 4; i++) {
        let battleResult = playGame();
        if (battleResult.includes("draw")) {
          userPoints += 1;
          computerPoints += 1;
        } else if (battleResult.includes("won")) {
          userPoints += 1;
        } else {
          computerPoints +=1;
        }
    }
}