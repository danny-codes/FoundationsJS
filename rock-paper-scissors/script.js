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
    let choice = prompt('Choose one: rock, paper or scissors?');

    if (choice === null) {
        console.log('You canceled the prompt');
        return null;
    }

    let userChoice = choice.toLowerCase();

    if (userChoice === 'rock') {
        return userChoice;
    }
    else if (userChoice === 'paper') {
        return userChoice;
    }
    if (userChoice === 'scissors') {
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

    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        console.log(`Round ${i + 1}`);
        console.log(`Player chose: ${humanSelection}`);
        console.log(`Computer chose: ${computerSelection}`);

        playRound(computerSelection, humanSelection);

        console.log(`Current score - Player: ${humanScore}, Computer: ${computerScore}`);
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

    function playRound(computerChoice, humanChoice) {
        if (computerChoice === 'rock'){
            if (humanChoice === 'rock') {
                console.log('Tie!');
                return 0;
            }
            else if (humanChoice === 'paper') {
                console.log('You lose! Rock beats paper!');
                computerScore += 1;
                console.log('Computer score is: ' + computerScore);
            }
            else if (humanChoice === 'scissors') {
                console.log('You lose! Rock beats scissors!');
                computerScore += 1;
                console.log('Computer score is: ' + computerScore);
            }
            else {
                console.log('Something went wrong!');
            }
        }
        if (computerChoice === 'paper'){
            if (humanChoice === 'paper') {
                console.log('Tie!');
            }
            else if (humanChoice === 'rock') {
                console.log('You win! Rock beats paper!');
                humanScore += 1;
                console.log('Your score is: '+ humanScore);
            }
            else if (humanChoice === 'scissors') {
                console.log('You win! Scissors beat paper!');
                humanScore += 1;
                console.log('Your score is: '+ humanScore);
            }
            else {
                console.log('Something went wrong!');
            }
        }
        if (computerChoice === 'scissors'){
            if (humanChoice === 'scissors') {
                console.log('Tie!');
            }
            else if (humanChoice === 'rock') {
                console.log('You win! Rock beats scissors!');
                humanScore += 1;
                console.log('Your score is: '+ humanScore);
            }
            else if (humanChoice === 'paper') {
                console.log('You lose! Scissors beat paper!');
                computerScore += 1;
                console.log('Computer score is: ' + computerScore);
            }
            else {
                console.log('Something went wrong!');
            }
        }
    }
}

playGame();