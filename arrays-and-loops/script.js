const myFavNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
let arrayLength = myFavNumbers.length;
const fruits = [];
fruits[0] = 'Apple';
fruits[1] = 'Pineapple';
let fruit = fruits[1];
fruits[0] = 'Mango';
document.getElementById('para').innerHTML = fruits.toString();
document.getElementById('para').innerHTML = myFavNumbers;

function sayHello() {
    console.log('Hello!');
}
const myArray = [1, 2, 3];
myArray[1] = sayHello;
myArray.sort();

let lastFruit = fruits[fruits.length - 1];
let fruitsLen = fruits.length;

let text = '<ul>';
for (let i = 0; i < fruitsLen; i++){
    text += '<li>' + fruits[i] + '</li>'
}
text += '</ul>'

let textStr = '<ul>';
fruits.forEach(myFunction);
textStr += '</ul>';

function myFunction(value) {
    textStr += '<li>' + value + '</li>';
}