function sum(param1, param2) {
    return param1 + param2;
}

console.log(sum(1, 2));

function favColor(color){
    return color + ' is my favorite color'
}

console.log(favColor('Black'));

function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Whale'))

const myNumber = Math.random();

function random(number) {
  return Math.floor(Math.random() * number); // random number between 0 and a specified number
}
const myRandomNum = random(100);

const myText = 'I am a person';
const myNewString = myText.replace('person', 'coder');

const myArray = ['I', 'like', 'color', 'blue'];
const aString = myArray.join(' ');
console.log(aString);

function sayHello(name = 'Alex') {
    console.log(`Hello ${name}!`);
}
sayHello('Paul');
sayHello();

// document.addEventListener('keydown', function (event) {
//     console.log(`You pressed "${event.key}"!`);
// });

document.addEventListener('keydown', (event) => {
    console.log(`You pressed "${event.key}"!`);
}); // arrow function

const numbers = [1, 2, 3];

const doubled = numbers.map(item => item * 2);

console.log(doubled); // [2, 4, 6]

const textBox = document.querySelector('#textBox');
const output = document.querySelector('#output');

textBox.addEventListener('keydown', (e) => {
    output.textContent = `You pressed "${e.key}".`
});

function output1(number) {
    console.log(number);
}

function a() {
    const y = 2;
    output1(y);
}

function b() {
    const z = 3;
    output1(z);
}

const para = document.getElementById('para');
const numInput = document.getElementById('numInput');

function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
    if (num < 0) return undefined;
    if (num === 0) return 1;
    let x = num - 1;
    while (x > 1) {
        num *= x;
        x--;
    }
    return num;
    }
    
numInput.addEventListener("change", () => {
    const num = parseFloat(numInput.value);
    if (isNaN(num)) {
    para.textContent = "You need to enter a number!";
} else {
    para.textContent = `${num} squared is ${squared(num)}. `;
    para.textContent += `${num} cubed is ${cubed(num)}. `;
    para.textContent += `${num} factorial is ${factorial(num)}. `;
}
});

function showMessage(from, text ='no text given'){
    console.log(from + ': ' + text);
}

showMessage('Me');

if (undefined == null){
    console.log('hi');
}

function showCount(count) {
    console.log(count ?? "unknown");
}

showCount(null);

function getSum(a, b){
    return a + b;
}

let result = getSum(1, 2);
console.log(result); // 3

// function doNothing() {}
// console.log(doNothing() === undefined) // true

function doNothing() {
    return;
}
console.log(doNothing() === undefined) // true

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age  > 18) || confirm('Did parents allow you?')
}

function min(a, b) {
    if (a < b) {
        return a;
    }
    else {
        return b;
    }
}

function min2(a, b) {
    return (a < b) ? a : b;
}

function pow(x, n) {
    return x * n;
}

let sayHi = function() {
    console.log('Hi');
}

let greetings = sayHi;

function ask(question, yes, no){
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    console.log('You agreed.');
}

function showCancel() {
    console.log('You canceled the execution.');
}

ask('Do you agree?', showOk, showCancel);

let age = prompt('What is your age?', 18);

// conditional declaration using function expression
let welcome = (age < 18) ?
    function() { alert('Hello!'); } :
    function() { alert('Greetings!'); };

welcome();