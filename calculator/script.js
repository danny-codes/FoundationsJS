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
let isSecondNum = false;
let hasResult = false;

function add(a, b) {
	return a + b;
};

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'You have entered singularity.';
    } else {
        return a / b;
    }
}

clearBtn.addEventListener('click', () => {
    input.value = '';
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    isSecondNum = false;
    console.log('Clear button clicked!');
});

document.querySelectorAll('.num-btn').forEach(number => {
    number.addEventListener('click', () => {
        if(hasResult) {
            input.value = ''
            hasResult = false;
        }
        input.value += number.textContent;
    });
});

function digitButtonsTrigger(button) {
    button.addEventListener('click', () => {
        if (!num1) {
            num1 = Number(input.value);
        }
        operator = button.textContent;
        isSecondNum = true;
        input.value = '';
        console.log(`${operator} button is clicked!`)
    });
}
digitButtonsTrigger(plus);
digitButtonsTrigger(minus);
digitButtonsTrigger(multiplyBtn);
digitButtonsTrigger(divideBtn);

result.addEventListener('click', () => {
    num2 = Number(input.value);
    let resultValue;
    if (operator === '+') {
        resultValue = add(num1, num2);
    } else if (operator === '-') {
        resultValue = subtract(num1, num2);
    } else if (operator === '×') {
        resultValue = multiply(num1, num2);
    } else if (operator === '÷') {
        resultValue = divide(num1, num2);
    }

    input.value = resultValue;
    num1 = resultValue;
    operator = undefined;
    isSecondNum = false;
    hasResult = true;
});