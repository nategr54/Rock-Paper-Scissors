// function before game starts 
function computerPlay() {
    const choice = ["Rock", "Paper", "Scissors"];
    const choiceRandom = choice[Math.floor(Math.random() * choice.length)];
    return choiceRandom;
}
// function that plays a single round 
function playRound(computerSelection, playerSelection) {
    
    if (computerSelection == "Rock" && playerSelection == "Rock") {
        console.log("DRAW!")
    }
    else if (computerSelection == "Paper" && playerSelection == "Rock") {
        console.log("YOU LOSE! Rock beats Paper!")
    }
    else if (computerSelection == "Scissors" && playerSelection == "Rock") {
        console.log("YOU WIN! Rock beats Scissors!")
    }
    else if (computerSelection == "Scissors" && playerSelection == "Paper") {
        console.log("YOU LOSE! Scissors beats Paper!")
    }
    else if (computerSelection == "Paper" && playerSelection == "Paper") {
        console.log("DRAW!")
    }
    else if (computerSelection == "Rock" && playerSelection == "Paper") {
        console.log("YOU WIN! Paper beats Rock!")
    }
    else if (computerSelection == "Scissors" && playerSelection == "Scissors") {
        console.log("DRAW!")
    }
    else if (computerSelection == "Paper" && playerSelection == "Scissors") {
        console.log("YOU WIN! Scissors beats Paper!")
    }
    else if (computerSelection == "Rock" && playerSelection == "Scissors") {
        console.log("YOU LOSE! Rock beats Scissors!")
    }
}
// variables
const computerSelection = computerPlay();
const playerSelection = "Scissors";
console.log(playRound(computerSelection, playerSelection));

