   let computerScore = 0
   let playerScore = 0


// function that plays a single round 
function playRound(selection) {
    
    function computerPlay() {
        let random = Math.random()
        if (random < .33) {
            return "rock"
        } else if (random <.66) {
            return 'paper'
        } else return 'scissors'
    }
    
    let playerSelection = selection
    let computerSelection = computerPlay()


    if (computerSelection == "rock" && playerSelection == "rock") {
        console.log('Draw!')
        resultsFeed.textContent('Draw!')
        return "draw"
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        console.log("You Lose! Paper beats Rock")
        computerScore++
        return 'lose'
    }
    else if (computerSelection == "scissors" && playerSelection == "rock") {
        console.log('You Win! Rock beats Scissors!')
        playerScore++
        return 'win'
    }
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        console.log("You Lose! Scissors beat Paper")
        computerScore++
        return 'lose'
    }
    else if (computerSelection == "paper" && playerSelection == "paper") {
        console.log('Draw!')
        return 'draw'
    }
    else if (computerSelection == "rock" && playerSelection == "paper") {
        console.log('You Win! Paper beats Rock!')
        playerScore++
        return 'win'
    }
    else if (computerSelection == "scissors" && playerSelection == "scissors") {
        console.log('Draw!')
        return 'draw'
    }
    else if (computerSelection == "paper" && playerSelection == "scissors") {
        console.log('You Win! Scissors beats Paper' )
        playerScore++
        return 'win'
    }
    else if (computerSelection == "rock" && playerSelection == "scissors") {
        console.log("You Lose! Rock beats Scissors")
        computerScore++
        return 'lose'        
    }
    console.log(playerScore)
    console.log(computerScore)
}


const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");


rockButton.onclick = () => playRound('rock');
paperButton.onclick = () => playRound('paper');
scissorsButton.onclick = () => playRound('scissors');


const container = document.querySelector("#container");

const resultsFeed = document.createElement("div");
resultsFeed.classList.add("resultsFeed");


// function game() {
//     for (let i = 0; i < 5; i++) {
//         playRound()
//         if (playerScore === 3) {
//             return 'You win the match'
//         } else if (computerScore === 3) {
//             return 'You lose the match'
//         } else i--
//     }
    
// }
