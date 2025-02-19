let input = document.querySelector('#calc-input');
let numberZero = document.querySelector('#zero');
let numberOne = document.querySelector('#one');
let numberTwo = document.querySelector('#two');
let numberThree = document.querySelector('#three');
let numberFour = document.querySelector('#four');
let numberFive = document.querySelector('#five');
let numberSix = document.querySelector('#six');
let numberSeven = document.querySelector('#seven');
let numberEight = document.querySelector('#eight');
let divideBtn = document.querySelector('#divide');
let multiplyBtn = document.querySelector('#multiply');
let minus = document.querySelector('#minus');
let plus = document.querySelector('#plus');
let result = document.querySelector('#result');
let decimal = document.querySelector('#decimal');

const add = function(a, b) {
	console.log(a + b);
};

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}