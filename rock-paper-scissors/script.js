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
    }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);