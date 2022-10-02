
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    return choices[Math.floor(Math.random() * choices.length)];
}

let playerScore = 0
let computerScore = 0
let playerSelection = prompt("Choose your fighter! Rock, Paper, or Scissors?");
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection == playerSelection) {
      console.log("Tie game!");
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
      ) { console.log("Computer Wins!");
        computerScore = computerScore + 1;
    } else if (
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "rock" && playerSelection == "paper") ||
        (computerSelection == "scissors" && playerSelection == "rock")
      )  {
        console.log("You win!")
        playerScore = playerScore + 1;
    } else {
        console.log("Please enter a valid answer.")
    }
}

console.log(playRound(playerSelection, computerSelection));