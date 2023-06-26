function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * 3)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "draw";
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "win";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "win";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "win";
    }
    else {
        return "lose";
    }
}
