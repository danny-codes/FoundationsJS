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

function getHumanChoice() {
    // let choice = prompt('Choose one: rock, paper or scissors?');

    if (choice === null) {
        console.log('You canceled the prompt');
        return null;
    }

    let userChoice = choice.toLowerCase();

    if (userChoice === 'rock' ||
        userChoice === 'paper' ||
        userChoice === 'scissors'){
        return userChoice;
    }
    else {
        console.log('Sorry, not a valid input.')
        return getHumanChoice();
    }
}

function playGame() {

    let computerScore = 0;
    let humanScore = 0;

    // for (let i = 0; i < 5; i++) {
    //     const computerSelection = getComputerChoice();
    //     const humanSelection = getHumanChoice();

    //     playRound(computerSelection, humanSelection);

    //     console.log(`Round ${i + 1}`);
    //     console.log(`Player chose: ${humanSelection}`);
    //     console.log(`Computer chose: ${computerSelection}`);

    //     console.log(`Current score - Player: ${humanScore}, Computer: ${computerScore}`);
    // }


    function playRound(computerChoice, humanChoice) {
        if (computerChoice === humanChoice) {
            if (computerChoice === humanChoice) {
                console.log('Tie!');
            }
        }
        else if (computerChoice === 'paper' && humanChoice === 'rock', 
            computerChoice === 'paper' && humanChoice === 'scissors',
            computerChoice === 'scissors' && humanChoice === 'rock'
        ) {
            console.log('You win!');
            humanScore += 1;
        }
        else {
            console.log('You lose!');
            computerScore += 1;
        }
    }

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

playGame();