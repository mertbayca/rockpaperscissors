function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection == playerSelection) {
      console.log("Tie game!");
    } else if {
        
    }
}

const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    return choices[Math.floor(Math.random() * choices.length)];
}

console.log(getComputerChoice());

const playerScore = 0
const computerScore = 0
const playerSelection = prompt("Choose your fighter! Rock, Paper, or Scissors?");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));