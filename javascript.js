const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const roundResultDiv = document.getElementById('roundResult');
const gameResultDiv = document.getElementById('gameResult');
const roundHeader = document.getElementById('round');
const playerScoreSpan = document.getElementById('playerScore');
const computerScoreSpan = document.getElementById('computerScore');
const computerSelectionDiv = document.getElementById('computer')
let roundCount = 1;
let playerScore = 0;
let computerScore = 0;


rockButton.addEventListener('click', () => playRound("Rock", getComputerChoice()));
paperButton.addEventListener('click', () => playRound("Paper", getComputerChoice()));
scissorsButton.addEventListener('click', () => playRound("Scissors", getComputerChoice()));

function keySelectChoice (e) {
    if (e.code == "KeyR") {
        rockButton.classList.add('selected');
        playRound("Rock", getComputerChoice());
    }
    if (e.code == "KeyP") {
        paperButton.classList.add('selected');
        playRound("Paper", getComputerChoice());
    }
    if (e.code == "KeyS") {
        scissorsButton.classList.add('selected');
        playRound("Scissors", getComputerChoice());
    }
}

window.addEventListener('keydown', keySelectChoice)

function unselectChoice (e) {
    if (e.code == "KeyR") rockButton.classList.remove('selected');
    if (e.code == "KeyP") paperButton.classList.remove('selected');
    if (e.code == "KeyS") scissorsButton.classList.remove('selected');
}

window.addEventListener('keyup', unselectChoice)

function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = options[Math.floor(Math.random() * 3)];
    return choice;
}

// function getPlayerChoice() {
//     let choice = prompt("Choose rock, paper or scissors").toLowerCase();
    
//     while (!(["Rock", "Paper", "Scissors"].includes(choice))) {
//         choice = prompt("Choose rock, paper or scissors").toLowerCase();
//     };

//     return choice;
// }

function playRound(playerSelection, computerSelection) {
    roundHeader.textContent = `Round ${roundCount}`;
    gameResultDiv.textContent = "...";

    if (playerSelection == computerSelection) {
        roundResultDiv.textContent = `Tie! ${playerSelection} matches ${computerSelection}.`;
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")) {
        playerScore += 1;
        roundResultDiv.textContent = `Nice one! ${playerSelection} beats ${computerSelection}.`;
    }
    else {
        computerScore += 1;
        roundResultDiv.textContent = `Unlucky... ${computerSelection} beats ${playerSelection}.`;
    }

    computerSelectionDiv.textContent = `BEEP! ${computerSelection}!`;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;

    if (roundCount == 5) {
        gameResultDiv.textContent = (playerScore == computerScore) ? "Wow! Game draw!" : (playerScore > computerScore) ? "Congratulations! You've won the game!" : "Bad luck! You've lost the game!";
        roundCount = 1;
        playerScore = 0;
        computerScore = 0;
        return
    }

    roundCount += 1;
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