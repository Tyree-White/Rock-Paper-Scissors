// Used to randomly select Rock, Paper, or Scissors.
function getComputerChoice() {
    // Randomly selects 0, 1, or 2.
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

// Prompts user to select weapon of choice.
function getUserChoice() {
    let userChoice = prompt("Type your weapon of choice! (Rock/Paper/Scissors)").toUpperCase();
    // Limits weapon of choice to only Rock, Paper, or Scissors.
    if (userChoice === "ROCK") {
    } else if (userChoice === "PAPER") {
    } else if (userChoice === "SCISSORS") {
    } else {
      alert("Sorry, but this weapon is not in your arsenal.")
    }
    return userChoice;
}

// Plays one round of Rock Paper Scissors.
function playGame() {
    // Stores user and computer choices in variables.
    let computerChoice = getComputerChoice();
    let userChoice = getUserChoice();
    // Compares user and computer choice and returns result of the game.
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

// Plays 5 rounds and keeps track of score.
function war() {
    // Stores user and computer points in variables.
    let userPoints = 0;
    let computerPoints = 0;
    // Loops through playGame() function 5 times.
    for (let i = 0; i < 5; i++) {
        // Stores result of the playGame() function in variable.
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
          alert("Game Over! The war has ended in a statemate neither you or you're opponent has won or lost.");
        } else if (i === 4 && userPoints > computerPoints) {
          alert("Game Over! You have won the war.");
        } else if (i === 4){
          alert("Game Over! You have lost the war.")
        }
    }
}
// Calls war function to prompt user choice upon visting the site.
war();