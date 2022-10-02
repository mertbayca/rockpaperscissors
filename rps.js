
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
    return prompt("Choose your fighter! Rock, Paper, or Scissors?");
}

let playerScore = 0
let computerScore = 0
let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = getPlayerChoice().toLowerCase();
    if (computerSelection == playerSelection) {
      console.log("Tie!");
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

function game() {
    for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
    }
}

console.log(game());