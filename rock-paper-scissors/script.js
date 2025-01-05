function getRandomInt() {
    let num = 3;
    return Math.floor(Math.random() * num);
}

function getComputerChoice() {
    value = getRandomInt();
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
    let userChoice = prompt('Choose one: rock, paper or scissors?');
    // make userChoice lower case or upper case

    if (userChoice === 'Rock' || userChoice === 'rock') {
        return userChoice;
    }
    else if (userChoice === 'Paper' || userChoice === 'paper') {
        return userChoice;
    }
    if (userChoice === 'Scissors' || userChoice === 'scissors') {
        return userChoice;
    }
    else {
        console.log('Sorry, not a valid input.')
    }
}

let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice) {
    if (computerChoice === 'rock'){
        if (humanChoice === 'rock') {
            console.log('Tie!');
        }
        else if (humanChoice === 'paper') {
            console.log('You lose! Rock beats paper!');
            computerScore = +1;
            console.log('Computer score is: ' + computerScore);
        }
        else if (humanChoice === 'scissors') {
            console.log('You lose! Rock beats scissors!');
            computerScore = +1;
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
            humanScore = +1;
            console.log('Your score is: '+ humanScore);
        }
        else if (humanChoice === 'scissors') {
            console.log('You win! Scissors beat paper!');
            humanScore = +1;
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
            humanScore = +1;
            console.log('Your score is: '+ humanScore);
        }
        else if (humanChoice === 'paper') {
            console.log('You lose! Scissors beat paper!');
            computerScore = +1;
            console.log('Computer score is: ' + computerScore);
        }
        else {
            console.log('Something went wrong!');
        }
    }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);

function playGame() {
    // call playRound 5 times
}