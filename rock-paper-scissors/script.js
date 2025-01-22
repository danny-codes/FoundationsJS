let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');
let playAgain = document.querySelector('#playAgain');

let computerScore = 0;
let humanScore = 0;

let roundCount = 0;

function getRandomInt() {
    let num = 3;
    return Math.floor(Math.random() * num);
}

function getComputerChoice() {
    let value = getRandomInt();
    if (value === 0) {
        return 'rock';
    }
    else if (value === 1) {
        return 'paper';
    }
    else if (value === 2) {
        return 'scissors';
    }
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        if (computerChoice === humanChoice) {
            console.log('Tie!');
        }
    }
    else if (computerChoice === 'paper' && humanChoice === 'rock'
    ) {
        console.log('You win!');
        humanScore += 1;
    }
    else if (computerChoice === 'paper' && humanChoice === 'scissors') {
        console.log('You win!');
        humanScore += 1;
    }
    else if (computerChoice === 'scissors' && humanChoice === 'rock') {
        console.log('You win!');
        humanScore += 1;
    }
    else {
        console.log('You lose!');
        computerScore += 1;
    }

    roundCount++;
    if (roundCount === 5) {
        endGame();
    }
}

function endGame() {
    console.log(`Final scores: Player ${humanScore} - Computer ${computerScore}`);
    if (humanScore > computerScore) {
        console.log('Congratulations, you win the game!');
    }
    else if (humanScore < computerScore) {
        console.log('Sorry, the computer wins the game!');
    }
    else {
        console.log("It's a tie!");
    }
}
    
function playGame() {

        rockBtn.addEventListener('click', () => {
            if (roundCount < 5) {
                let humanChoice = rockBtn.id;
                let computerSelection = getComputerChoice();
                console.log(`Round ${roundCount + 1}: Player chose ${humanChoice}, Computer chose ${computerSelection}`);
                playRound(computerSelection, humanChoice);
            }
        });
        
        paperBtn.addEventListener('click', () => {
            if (roundCount < 5) {
                let humanChoice = paperBtn.id;
                let computerSelection = getComputerChoice();
                console.log(`Round ${roundCount + 1}: Player chose ${humanChoice}, Computer chose ${computerSelection}`);
                playRound(computerSelection, humanChoice);
            }
        });

        scissorsBtn.addEventListener('click', () => {
            if (roundCount < 5) {
                let humanChoice = scissorsBtn.id;
                let computerSelection = getComputerChoice();
                console.log(`Round ${roundCount + 1}: Player chose ${humanChoice}, Computer chose ${computerSelection}`);
                playRound(computerSelection, humanChoice);
            }
        });
}

playGame();

playAgain.addEventListener('click', () => {
    location.reload()
});

