// The Choices

const choices = ['Rock', 'Paper', 'Scissors'];

// Creating the variables

let playerChoice
let computerChoice
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

// Selecting computer choice

function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)]
}
// Game instructions :

console.log("game() to start a new round \n reset() to reset the score");

// Function to reset the scores before staring a new game

function reset() {
    playerScore = 0;
    computerScore = 0;
}

// Function to play a round

function round(playerChoice, computerChoice) {
    roundNumber;
    playerScore;
    computerScore;
    playerChoice = prompt('Rock, Paper or Scissors?');
    computerChoice = computerPlay();

// Player beats computer with Rock
    if (computerChoice.toLowerCase() == "rock" && playerChoice.toLowerCase() == 'paper') {
        console.log(`You win, the computer chose ${computerChoice}`);
        playerScore++
        roundNumber++;
        return ("Well done, you win");
 // Player beats computer with Paper   
    } else if (computerChoice.toLowerCase() == 'paper' && playerChoice.toLowerCase() == 'scissors') {
        console.log(`You win, the computer chose ${computerChoice}`);
        playerScore++
        roundNumber++;
        return ("Well done, you win");
// Player beats computer with Scissors  
    } else if (computerChoice.toLowerCase() == 'scissors' && playerChoice.toLowerCase() == 'rock') {
        console.log(`You win, ${playerChoice} beats ${computerChoice}`);
        playerScore++;
        roundNumber++;
        return ("Well done, You Win");
// Both Computer and Player make the same Choice
    } else if (computerChoice.toLowerCase() == playerChoice.toLowerCase()) {
        console.log("Its a draw");
        roundNumber++;
        return ("Its a Draw");
// All other results are a loss
    } else {
        console.log(`You lost, ${computerChoice.toLowerCase()} beats ${playerChoice.toLowerCase()}`)
        computerScore++
        roundNumber++;
        return ("You lost")
    }
    }

    // Running a game of 5 rounds and display final score

    function game() {
        for (let i = 0; i < 5; i++) {
            round(playerChoice, computerChoice);
        }

        if (roundNumber == 5 && playerScore > computerScore) {
            console.log(`You won, the score was You ${playerScore} - CPU ${computerScore}`);
        } else {
            console.log(`You lost, the score was CPU ${computerScore} : You ${playerScore}`)
        }
    }
    