// function before game starts 
function computerPlay() {
    let random = Math.random()
    if (random < .33) {
        return "rock"
    } else if (random <.66) {
        return 'paper'
    } else return 'scissors'
}

let computerScore = 0
let playerScore = 0

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors')
const feed = document.querySelector('#feed')

rock.addEventListener("click", () => playRound("rock"))
paper.addEventListener("click", () => playRound("paper"))
scissors.addEventListener("click", () => playRound("scissors"))

// function that plays a single round 
function playRound(x) {
    let playerSelection = x
    let computerSelection = computerPlay()
    console.log(playerSelection, computerSelection)

    if (computerSelection == "rock" && playerSelection == "rock") {
        feed.textContent = 'Draw!'
               return "draw"
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        feed.textContent="You Lose! Paper beats Rock"
        computerScore++
        return 'lose'
    }
    else if (computerSelection == "scissors" && playerSelection == "rock") {
        feed.textContent = ('You Win! Rock beats Scissors!')
        playerScore++
        return 'win'
    }
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        feed.textContent = ("You Lose! Scissors beat Paper")
        computerScore++
        return 'lose'
    }
    else if (computerSelection == "paper" && playerSelection == "paper") {
        feed.textContent = ('Draw!')
        return 'draw'
    }
    else if (computerSelection == "rock" && playerSelection == "paper") {
        feed.textContent = ('You Win! Paper beats Rock!')
        playerScore++
        return 'win'
    }
    else if (computerSelection == "scissors" && playerSelection == "scissors") {
        feed.textContent = ('Draw!')
        return 'draw'
    }
    else if (computerSelection == "paper" && playerSelection == "scissors") {
        feed.textContent = ('You Win! Scissors beats Paper' )
        playerScore++
        return 'win'
    }
    else if (computerSelection == "rock" && playerSelection == "scissors") {
        console.log("You Lose! Rock beats Scissors")
        computerScore++
        return 'lose'        
    } else console.log('the score is not working')
}


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
