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

}