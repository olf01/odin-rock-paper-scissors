const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const roundResultDiv = document.getElementById('roundResult');
const gameResultDiv = document.getElementById('gameResult')
let roundCount = 0;
let playerScore = 0;
let computerScore = 0;


rockButton.addEventListener('click', () => playRound('rock', getComputerChoice()));
paperButton.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissorsButton.addEventListener('click', () => playRound('scissors', getComputerChoice()));

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * 3)];
    return choice;
}

// function getPlayerChoice() {
//     let choice = prompt("Choose rock, paper or scissors").toLowerCase();
    
//     while (!(["rock", "paper", "scissors"].includes(choice))) {
//         choice = prompt("Choose rock, paper or scissors").toLowerCase();
//     };

//     return choice;
// }

function playRound(playerSelection, computerSelection) {
    roundCount += 1;
    if (roundCount == 5) {
        roundCount = 0;
        playerScore = 0;
        computerScore = 0;
        gameResultDiv.textContent = (playerScore == computerScore) ? "Game draw!" : (playerScore > computerScore) ? "Congratulations! You've won the game!" : "Oh no! You've lost the game!";
        return
    }

    gameResultDiv.textContent = ""
    console.log(playerSelection, computerSelection)
    if (playerSelection == computerSelection) {
        roundResultDiv.textContent = "Tie!";
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore += 1;
        roundResultDiv.textContent = `Nice one! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        computerScore += 1;
        roundResultDiv.textContent = `Bad luck... ${computerSelection} beats ${playerSelection}`;
    }
}

// function game() {
//     let score = 0

//     for (let i = 0; i < 5; i++) {
//         let playerSelection = getPlayerChoice();
//         let computerSelection = getComputerChoice();
//         let outcome = playRound(playerSelection, computerSelection);

//         if (outcome === "win") {
//             console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
//             score += 1
//         }
//         else if (outcome === "draw") {
//             console.log("Draw!")
//         }
//         else {
//             console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
//             score -= 1
//         }
//     }

//     if (score > 0) {
//         console.log("Congratulations! You've won the game!");
//     }
//     else if (score === 0) {
//         console.log("Game draw!")
//     }
//     else {
//         console.log("Oh no! You've lost the game!")
//     }

// }

// game()