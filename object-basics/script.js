let name = new Object(); // 'object constructor' syntax
let user = {
    name: 'John',
    age: 30,
    'likes music': true, // multiword property must be in quotes
}; // 'object literal' syntax

console.log(user.name);
console.log(user.age);

user.isAdmin = true;
console.log(user.isAdmin); // true

console.log(user['likes music']);

delete user['likes music'];

let key = "likes birds";
// same as user["likes birds"] = true;
user[key] = true;

let userName = prompt('Your name?', 'name');

alert(user[userName]); // John if enter 'name'

let fruit = prompt('Which fruit do you buy?', 'apple')

// let bag = {
//     [fruit]: 5 // the name of the property is taken from the variable for fruit
// }
let bag = {};
bag[fruit] = 5; // works the same as the example above
let fruitBag = {
    [fruit + 'Computers']: 5 // bag.appleComputers = 5
};


alert(bag.apple); // shows 5 if fruit is 'apple'

function makeUser(name, age) {
    return {
        name, // same as name: name
        age: age,
    };
}

let userInfo = makeUser('John', 30);
console.log(userInfo.name);

alert(user.noSuchProperty === undefined); // true
console.log('age' in user); // true
console.log('qwerty' in user); // false

// let key = 'age';
console.log(key in user); // true
for (let key in user) {
    console.log(key); //name, age, isAdmin, likes birds
    console.log(user[key]); // John, 30, true, true
}

let codes = {
    49: 'Germany',
    41: 'Switzerland',
    44: 'Great Britain',
    1: 'USA'
};
for (let code in codes) {
    console.log(code); // 1, 41, 44, 49
}

for (let key in user) {
    console.log(key);
}

let countryCodes = {
    '+49': 'Germany',
    '+41': 'Switzerland',
    '+44': 'Great Britain',
    '+1': 'USA'
};
for (let code in countryCodes) {
    console.log(code); // 49, 41, 44, 1
}

// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user[name];

function isEmpty(obj) {
    for (let key in obj) {
        return false
    }
    return true;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum); // 390

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            let result = obj[key] *= 2;
            console.log(result);
            console.log(menu);
        }
    }
}

const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    bio() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
        console.log(`Hi! My name is ${this.name[0]} ${this.name[1]}.`);
    },
}

person['eyes'] = 'brown';
person.farewell = function () {
    console.log('Bye!');
}
person.farewell();

const myDataName = 'height';
const myDataValue = '1.75m';
person[myDataName] = myDataValue;

function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function() {
        console.log(`Hello! I'm ${this.name}.`);
    }
    return obj
}

function Person(name) {
    this.name = name;
    this.introduceSelf = function() {
        console.log(`Hi! I'm ${this.name}`);
    };
}

function addOne(num) {
    return num + 1;
}

const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map(addOne);
// const mappedArr = arr.map((num) => num + 1); inline function
console.log(mappedArr); // 

function isOdd(num) {
    return num % 2 !== 0;
}

const oddNums = arr.filter(isOdd);
console.log(oddNums); // 1, 3, 5
console.log(arr); // 1, 2, 3, 4, 5 (original array)

const productOfAllNums = arr.reduce((total, currentItem) => {
    return total * currentItem;
}, 1);
console.log(productOfAllNums); // Outputs 120
console.log(arr); // Outputs [1, 2, 3, 4, 5]

let myArray = [];
function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            const tripleEvenNumber = array[i] * 3;
            sum += tripleEvenNumber;
        }
    }
    return sum;
}

function sumOfTripledEvens1(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            const tripleEvenNumber = array[i] * 3;
            sum += tripleEvenNumber;
        }
    }
    return sum;
}

function isEven (num) {
    if (num % 2 === 0) {
        return num;
    }
}

function sumOfTripledEvens2(array) {
    return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}

let array = ["I", "study", "JavaScript"];

let removed = array.splice(0, 2);
console.log(removed);
array.splice(2, 0, 'complex', 'language');
console.log(array);

let numArr = [1, 2, 5];
numArr.splice(-1, 0, 3, 4); // -1 means one step from the end
console.log(numArr);
console.log( numArr.slice(0, 2) );

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];

let getUser = users.find(item => item.id == 1);
console.log(getUser.name); // John

let someUsers = users.filter(item => item.id < 3);
console.log(someUsers.length); // 2

let lengths = ['Biblo', 'Gandalf', 'Nazgul'].map(item => item.length);
console.log(lengths); // 5, 7, 6

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

let numbers = [1, 2, 13];

numbers.sort(compareNumeric);
// numbers.sort(function(a,b) {return a - b;});
// numbers.sort((a, b) => a - b);

console.log(numbers)

let names = 'Bilbo, Gandalf, Nazgul';

let namesArr = names.split(', ');

let stringsArr = ['Bilbo', 'Gandalf', 'Nazgul'];
let str = stringsArr.join(';'); // glue the array into a string using ;
console.log(str);

for (let name of namesArr) {
    console.log(`A message to ${name}`);
}

const numList = [1, 2, 3];

const add = (a, b) => a + b;

const addResult = numList.reduce(add);

// alert(Array.isArray({})); false

// alert(Array.isArray([])); true

function camalize(str) {
    const noDashArr = str.split('-');
    console.log(array);

    for (let i = 0; i < noDashArr.length; i++) {
        if (i > 0) {
            noDashArr[i] = noDashArr[i].charAt(0).toUpperCase() + noDashArr[i].slice(1);
        }
    }
    return noDashArr.join('');
}

camalize('hello-world'); // "helloWorld"
console.log(camalize('my-long-string')); // "myLongString";