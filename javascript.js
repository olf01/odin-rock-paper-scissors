function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * 3)];
    return choice;
}

function getPlayerChoice() {
    let choice = prompt("Choose rock, paper or scissors").toLowerCase();
    
    while (!(["rock", "paper", "scissors"].includes(choice))) {
        choice = prompt("Choose rock, paper or scissors").toLowerCase();
    };

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

function game() {
    let score = 0

    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let outcome = playRound(playerSelection, computerSelection);

        if (outcome === "win") {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
            score += 1
        }
        else if (outcome === "draw") {
            console.log("Draw!")
        }
        else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
            score -= 1
        }
    }

    if (score > 0) {
        console.log("Congratulations! You've won the game!");
    }
    else if (score === 0) {
        console.log("Game draw!")
    }
    else {
        console.log("Oh no! You've lost the game!")
    }

}

game()