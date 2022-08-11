//This is from scratch

function getComputerChoice() {
    let randomNumber = Math.floor( Math.random()*3 ) + 1
    if (randomNumber === 1) {
        return("rock");
    } else if (randomNumber === 2) {
        return("paper");
    } else {
        return("scissor");
    }
   
}

//let playerSelection = prompt("Choose Rock, Paper or Scissor!").toLowerCase()
//let computerSelection = getComputerChoice()

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie")
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            console.log("You lose. Paper beats Rock")
        } else {
            console.log("You Win! Rock beats Scissor")
        }
    } else if (playerSelection == "scissor") {
        if (computerSelection == "rock") {
            console.log("You lose. Rock beats Scissor")
        } else {
            console.log("You Win! Scissor beats Paper")
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissor") {
            console.log("You lose. Scissor beats Paper") 
        } else {
            console.log("You win! Paper beats Rock")
        }
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose Rock, Paper or Scissor!").toLowerCase()
        let computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
    }
}

game();
//console.log(playRound(playerSelection, computerSelection));