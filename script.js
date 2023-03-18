// The Choices

const choices = ['Rock', 'Paper', 'Scissors'];

// Creating the variables
let playerChoice
let computerChoice


// Selecting computer choice3
function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)]
}

// Function to play a round

function round(playerChoice, computerChoice) {
    
    playerChoice = prompt('Rock, Paper or Scissors?');
    computerChoice = computerPlay();

    if (computerChoice.toLowerCase() == "rock" && playerChoice.toLowerCase() == 'paper') {
        console.log(`You win, the computer chose ${computerChoice}`);
        return ("Well done, you win");
    
    } else if (computerChoice.toLowerCase() == 'paper' && playerChoice.toLowerCase() == 'scissors') {
        console.log(`You win, the computer chose ${computerChoice}`);
        return ("Well done, you win");
       
    } else if (computerChoice.toLowerCase() == 'scissors' && playerChoice.toLowerCase() == 'rock') {
        console.log(`You win, ${playerChoice} beats ${computerChoice}`);
        return ("Well done, You Win");
    
    } else if (computerChoice.toLowerCase() == playerChoice.toLowerCase()) {
        console.log("Its a draw");
        return ("Its a Draw")
   
    } else {
        console.log(`You lost, ${computerChoice} beats ${playerChoice}`)
        return ("You lost")
    }
    }

    // Running a game of 5 rounds

    function game() {
        for (let i = 0; i < 5; i++) {
            round(playerChoice, computerChoice)
        }
    }