//This is from scratch

function getComputerChoice() {
    let randomNumber = Math.floor( Math.random()*3 ) + 1
    if (randomNumber === 1) {
        return("Rock");
    } else if (randomNumber === 2) {
        return("Paper");
    } else {
        return("Scissor");
    }
   
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Rock") {
        return "Draw"
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose. Paper beats Rock!"
    } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
        return "You Win. Rock beats Scissor!"
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock!"
    } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
        return "You lose. Scissor beats Paper!"
    } else if (playerSelection === "Scissor" && computerSelection === "Rock") {
        return "You lose. Rock beats Scissor"
    } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
        return "You win. Scissor beats Paper!"
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return "Draw"
    } else {
        return "Draw"
    }
}

const playerSelection = "Rock"
const computerSelection = getComputerChoice()

console.log(playRound());