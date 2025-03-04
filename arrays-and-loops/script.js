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

const contacts = [
    "Chris:2232322",
    "Sarah:3453456",
    "Bill:7654322",
    "Mary:9998769",
    "Dianne:9384975",
];
const para = document.getElementById("display");
const input = document.querySelector("input");
const btn = document.getElementById("searchBtn");

btn.addEventListener("click", () => {
    const searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();
    para.textContent = "";
    for (const contact of contacts) {
        const splitContact = contact.split(":");
        if (splitContact[0].toLowerCase() === searchName) {
        para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
        break;
    }
    }
    if (para.textContent === "") {
        para.textContent = "Contact not found.";
    }
});

const par = document.getElementById("displayNum");
const numInput = document.getElementById("number");
const intBtn = document.getElementById("intBtn");

intBtn.addEventListener("click", () => {
    par.textContent = "Output: ";
    const num = numInput.value;
    numInput.value = "";
    numInput.focus();
    for (let i = 1; i <= num; i++) {
        let sqRoot = Math.sqrt(i);
        if (Math.floor(sqRoot) !== sqRoot) {
        continue;
    }
    par.textContent += `${i} `;
    }
});

const output = document.querySelector('.output');
output.textContent = "";

let i = 10;

while (i >= 0) {
    const para = document.createElement('p');
    if (i === 10) {
        para.textContent = `Countdown ${i}`;
    } else if (i === 0) {
        para.textContent = 'Blast off!';
    } else {
        para.textContent = i;
    }

    output.appendChild(para);

    i--;
}

const people = ['Phil', 'Lola', 'John', 'Laura'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (const person of people) {
    if (person === 'Phil' || person === 'Lola') {
    refused.textContent += `${person}, `;
    } else {
    admitted.textContent += `${person}, `;
    }
}

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';

for (let i = 0; i < 10; i++) {

    if (i % 2 == 0) continue;

    console.log(i);
}

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let j = 0;
while (j < 3) {
    console.log(`number ${j}!`);
    j++;
}

let userNumber;

do {
    userNumber = prompt('Enter a number greater than 100: ', 0);
} while (userNumber <= 100 && userNumber);

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    console.log(i);
}

while (i < 0) {
    console.log(`${i} is > 0`);
}