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

document.addEventListener('keydown', function (event) {
    console.log(`You pressed "${event.key}"!`);
});