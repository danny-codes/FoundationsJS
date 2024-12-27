let a = 10;

console.log(a);

let name = 'John';
let surname = 'Doe';

console.log(name);
console.log(surname);

let age = 11;
console.log(age);

age = 54;
console.log(age);

const pi = 3.14;
// pi = 10;

console.log(pi);

console.log((3+2) - 76 * (1+1));

// assignment

console.log(33+33);
console.log(1 + 2 + 3 + 4 + 5 + 6);
console.log((4 + 6 + 9) / 77);

const max = 57;
const actual = max - 13;
const percentage = actual / max;

const height = 170;
const heightInM = height / 100;


//basic operators

let x = 1;

// an operator is unary if it has a single operand (operand = argument)

x = -x;
console.log(x); // -1, unary negation applied

// an operator is binary if it has two operands

// let x = 1, y = 3;
// console.log(y - x); // 2, binary minus subtracts values

//remainder %
console.log(5 % 2);
console.log(8 % 3);

//exponentiation **
console.log(2 ** 2); // 2^2 
console.log(2 ** 3); //2^3

let s = "my" + "string";
console.log(s); // mystring

console.log('1' + 2); //"12"

console.log(2 + 2 + '1'); // '41'

console.log('1' + 2 + 2); // '122'


console.log(6 - '2'); // 4
console.log('6' / '2'); // 3

// no effect on numbers
let d = 1;
console.log(+d); // 1

let y = -2;
console.log(+y); // -2

// Converts non-numbers
console.log(+true); // 1
console.log(+""); // 0

let apples = '2';
let oranges = '3';

console.log(apples + oranges); // '23'
console.log(+apples + +oranges); // 5

let assignment = 2 * 2 + 1;
console.log(assignment);

let f = 1;
let k = 2;

let n = 3 - (f = k + 1);

console.log( f );
console.log(n);

// let a, b, c;

// a = b = c = 2 + 2;

// console.log(a); //4
// console.log(b); //4
// console.log(c); //4
//or better do:
// c = 2 + 2;
// b = c;
// a = c;

let g = 2;
g += 5; // now n = 7 (same as n = n + 5)
g *= 2; // now n = 14 (same as n = n * 2)

console.log(g); // 14

let l = 2;
l *= 3 + 5; // right part evaluated first, same as n *= 8
console.log(l); //16

let counter = 2;
counter ++;
console.log(counter);

let counter0 = 0;
console.log(counter ++); // 0 

let counter1 = 0;
console.log(++counter); // 1

let counter2 = 1;
console.log( 2 * ++counter2 ); // 4

// let counter3 = 1;
// console.log( 2 * counter3++ ); // 2

let counter3 = 1;
console.log( 2 * counter3 ); // 2
counter3++;

let TorF = true + false;
console.log(TorF);

result = console.log("" + 1 + 0);
result0 = console.log("" - 1 - 0);
result1 = console.log(4 + 5 + "px");
result2 = console.log("4px" - 2); //NaN
result3 = console.log(" -9 " - 5);
result4 = console.log(null + 1);
result5 = console.log(undefined + 1); //NaN
result6 = console.log(" \t \n" - 2);

// simple exercise
// let firstNumber = prompt("First number?", 1);
// let secondNumber = prompt("Second number?", 2);

let firstNumber = 1;
let secondNumber = 2;

// prompt('First number?', firstNumber);
// prompt('Second number', secondNumber);

console.log(firstNumber + secondNumber); // was 12, now 3;

console.log(2 ** 2);

let h = 5;
h++;
let p = h;
console.log(h);

let floating = console.log(0.2 + 0.1);
let floatingSolution = console.log((0.2 * 10 + 0.1 * 10) / 10);


// let myNumber = 2;
// // Execute until Infinity
// while (myNumber != Infinity) {
//   myNumber = myNumber * myNumber;
// }

let myNumber = 32;
myNumber.toString(32); 
myNumber.toString(16); //hexadecimal
myNumber.toString(10); // decimal
myNumber.toString(8); // octal
myNumber.toString(2); // binary

const btn = document.querySelector('button');
const txt = document.querySelector('p');

// toggle
btn.addEventListener('click', updateBtn);

function updateBtn() {
    if (btn.textContent === 'Start machine') {
        btn.textContent = 'Stop machine';
        txt.textContent = 'The machine has started';
    }
    else {
        btn.textContent = 'Start machine';
        txt.textContent = 'The machine is stopped';
    }
}

let admin = 'me';
let name1 = 'Jane';
name1 = 'John';
admin = name1;
alert(admin);

const EARTH_NAME = 'Earth';

const currentUser = 'Jaden';