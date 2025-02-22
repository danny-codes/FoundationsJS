const input = document.querySelector('#calc-input');
let numberZero = document.querySelector('#zero');
let numberOne = document.querySelector('#one');
let numberTwo = document.querySelector('#two');
let numberThree = document.querySelector('#three');
let numberFour = document.querySelector('#four');
let numberFive = document.querySelector('#five');
let numberSix = document.querySelector('#six');
let numberSeven = document.querySelector('#seven');
let numberEight = document.querySelector('#eight');
let numberNine = document.querySelector('#nine');
let divideBtn = document.querySelector('#divide');
let multiplyBtn = document.querySelector('#multiply');
let minus = document.querySelector('#minus');
let plus = document.querySelector('#plus');
let result = document.querySelector('#result');
let clearBtn = document.querySelector('#clear');

let num1;
let num2;
let operator;

const add = function(a, b) {
	return a + b;
};

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

// const multiply = function (array) {
//     return array.reduce((product, current) => product * current)
// };

function divide(a, b) {
    if (b === 0) {
        return 'You have entered singularity.';
    } else {
        return a / b;
    }
}

// const multiply = function (array) {
//     return array.reduce((product, current) => product * current)
// };

document.addEventListener('DOMContentLoaded', () => {
    clearBtn.addEventListener('click', () => {
        input.value = '';
        console.log('Clear button clicked!');
    })
})

function displayDigit(number) {
    number.addEventListener('click', () => {
        input.value += number.textContent;
        console.log(`${number} button clicked!`);
    })
}
console.log(num1);

displayDigit(numberZero);
displayDigit(numberOne);
displayDigit(numberTwo);
displayDigit(numberThree);
displayDigit(numberFour);
displayDigit(numberFive);
displayDigit(numberSix);
displayDigit(numberSeven);
displayDigit(numberEight);
displayDigit(numberNine);

function eventListenerForNums(number) {
    number.addEventListener('click', () => {
        input.value = '';
        input.value = number.textContent;
    })
}

function digitButtonsTrigger(button) {
    button.addEventListener('click', () => {
        num1 = input.value;

        // if (eventListenerForNums(numberZero) ||
        // eventListenerForNums(numberOne) ||
        // eventListenerForNums(numberTwo) ||
        // eventListenerForNums(numberThree) ||
        // eventListenerForNums(numberFour) ||
        // eventListenerForNums(numberFive) ||
        // eventListenerForNums(numberSix) || 
        // eventListenerForNums(numberSeven) ||
        // eventListenerForNums(numberEight) || 
        // eventListenerForNums(numberNine)
        // ) {
        //     console.log('hello');
        //     num2 = input.value;    
        // }
        eventListenerForNums(numberZero);
        eventListenerForNums(numberOne);
        eventListenerForNums(numberTwo);
        eventListenerForNums(numberThree);
        eventListenerForNums(numberFour);
        eventListenerForNums(numberFive);
        eventListenerForNums(numberSix);
        eventListenerForNums(numberSeven);
        eventListenerForNums(numberEight);
        eventListenerForNums(numberNine);
        num2 = input.value;
        operator = button.textContent;   
    })
}
digitButtonsTrigger(plus);

// let userNumbers = input ARRAY
// console.log(input.value);


function operate(num1, num2, operator) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    }
}


result.addEventListener('click', () => {
    operate()
})