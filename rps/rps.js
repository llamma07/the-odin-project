console.log("This is the Rock Paper Scissors game!");

function getComputerChoice() {
  let num = Math.random();
  if (num < 0.34) {
    return "rock";
  } else if (num <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getPlayerChoice() {
  return prompt("Do you choose rock, paper or scissors?").toLowerCase();
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return `You win! ${playerChoice} beats ${computerChoice}`;
  } else {
    return `You lose! ${computerChoice} beats ${playerChoice}`;
  }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let round = 1; round <= 5; round++) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);
        console.log(`Round ${round}: ${result}`);
        if (result.startsWith("You win")) {
            playerScore++;
        } else if (result.startsWith("You lose")) {
            computerScore++;
        }
    }
    console.log(`Final Score - You: ${playerScore}, Computer: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > playerScore) {
        console.log("Sorry! The computer won the game.");
    } else {
        console.log("The game ended in a tie!");
    }
}

playGame();

