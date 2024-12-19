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