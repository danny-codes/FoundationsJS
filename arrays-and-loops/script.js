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

fruits.push('Coconut');
// fruits[6] = "Orange";  // creates undefined "holes" in fruits 
let type = typeof fruits;
Array.isArray(fruits); // returns a boolean value
(fruits instanceof Array); // instanceof operator returns true if an object is created by a given constructor

document.getElementById('demo').innerHTML = fruits.join(' * ');
fruits.pop();
fruits.push('Kiwi');
let length = fruits.push("Banana"); // returns the new array length
fruits.shift();
fruits.unshift('Watermelon');
fruits[fruits.length] = 'Grape';

const evenNums = [2, 4, 6, 8];
const oddNums = [1, 3, 5, 7, 9];

const numbers = evenNums.concat(oddNums, 'other arrays or strings');

// fruits.copyWithin(2, 0);

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();

const myArr1 = [1, 2, 3, 4, 5, 6];
const newArr1 = myArr.flatMap(x => [x, x * 10]);

fruits.splice(5, 0, 'Pear');

// fruits.splice(0, 1); // first param (0) removes element at index 0,
// second param (1) defines how many elements should be removed

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);

fruits.push('Orange');
const citrus = fruits.slice(6);
const fruits2 = fruits.slice(0, 2); 

const cats = ['Leopard', 'Tiger', 'Lion'];

for (const cat of cats) {
    console.log(cat);
}

function toUpper(string) {
    return string.toUpperCase();
}

const upperCats = cats.map(toUpper);

console.log(upperCats);

const filtered = cats.filter((cat) => cat.startsWith('L'));
console.log(filtered);

const results = document.querySelector('#results');

function calculate() {
    for (let i = 1; i < 10; i++) {
        const newResult = `${i} x ${i} = ${i * i}`;
        results.textContent += `${newResult}\n`;
    }
    results.textContent += "\nFinished!\n\n";
}

const calculateBtn = document.querySelector('#calculate');
const clearBtn = document.querySelector('#clear');

calculateBtn.addEventListener('click', calculate);
clearBtn.addEventListener('click', () => (results.textContent = ''));

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

let myFavoriteCats = "My cats are called ";

for (let i = 0; i < cats.length; i++) {
    if (i === cats.length - 1) {
        myFavoriteCats += `and ${cats[i]}.`;
    }
    else {
        myFavoriteCats += `${cats[i]}, `;
    }
}

console.log(myFavoriteCats);