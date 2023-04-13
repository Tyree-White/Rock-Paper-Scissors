function getComputerChoice () {
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

function getUserChoice () {
    let userChoice = prompt("Type your weapon of choice! (Rock/Paper/Scissors)").toUpperCase();
    return userChoice;
}