// alert( 1 / 0); // Infinity
// alert( Infinity ); // Infinity

// let isGreater = 4 > 1;
// alert( isGreater ); // true (the comparison result is "yes")

const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);

const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

/**
 * ===== Troubleshooting =====
 * The function below should log the number 2, however it does not, 
 * see if you can fix it!
 * Be sure to fix it in the spirit of the code, do not hard code the result.
 */

function troubleshooting() {
	const a = 1;
	const b = 1;

	let result;

	// Edit between these lines
	// =================================
	result = a + b;

	// =================================

	return result;
}

/**
 * The code below tells the browser to ask you for a number
 * then if that number is `6`, it returns `true` otherwise it returns `false`
 * 
 * Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10
 */


function numberChecker(number) {
	if(number >= 10) {
		return true;
	} else{
		return false;
	}
}

const userInputNumber = Number(prompt("What's your number?"));
console.log(numberChecker(userInputNumber));

/**
 * Lets do some math!
 * Some rules first:
 *   - Replace the strings to the right of the = with the math expression they describe.
 *   - Do not manually enter the answers to the equations. For example, `const a = 9` would be incorrect as 9 is the answer to the equation you're being asked to write out
 */

const a = 1 + 8;
const b = 22 * 3;
const c = 5 % 4;
const d = a - 17;
const e = a + b + c + d;

console.log(a, b, c, d, e);

console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

let hour = 9;

if (hour < 10 || hour > 18) {
	console.log( 'The office is closed.' );
}

console.log((a && b) || (c && d));

console.log(!!'non empty');


age = 14;
if(age >= 14 && age <= 90){
	console.log('hi');
} // it checks to see if the age is actually is within the allowed range, if true for both returns true, if one or more false it returns false

if(!(age >= 14 && age <= 90)){
	console.log('hello');
}

if(age < 14 || age > 90){
	console.log('the age is out of the range');
} // so if at least one of the values is out of the range, it returns true

// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) console.log( 'first' );

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) console.log( 'second' );

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) console.log( 'third' );

let userName = prompt('What is your username?', '');

if (userName === 'Admin'){
	let password = prompt('What is your password?', '')
	if (password === 'TheMaster'){
		alert('Welcome!');
	}
	else if (password === '' || password === null) {
		alert('Canceled!');
	}
	else{
		alert('Wrong password');
	}
}
	else if (userName === '' || userName === null) {
		alert('Canceled');
	}
	else {
		alert("I don't know you")
	}

// function userLogin() {
// 	userLogin = prompt("What's your login?");
// 	if (userLogin = "Admin") {
// 		password = prompt('Your password');
// 	}
// 	else{ (userLogin = '' || null)
// 		alert('Canceled');
// 	}
// }

// function userLogin() {
// 	userLogin = prompt('Whats your login?');

// }

const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setColor);

// function setColor() {
// 	const choice = select.value

// 	if (choice === 'red') {
// 		para.textContent = 'What a cool choice!'
// 	}

// 	else if (choice === 'blue') {
// 		para.textContent = 'Really tranquil choice'
// 	}
// 	else if (choice === 'green') {
// 		para.textContent = 'Amazing!'
// 	}
// 	else {
// 		para.textContent = '';
// 	}
// }

//using switch statements instead

function setColor() {
  const choice = select.value;

  switch (choice) {
    case "red":
      para.textContent = "What a cool choice!";
      break;

    case "blue":
      para.textContent = "Really tranquil choice";
      break;

    case "green":
      para.textContent = "Amazing!";
      break;
    default:
      para.textContent = "";
  }
}

isBirthday = true;

const greeting = isBirthday
	? 'Happy birthday Jane Doe!'
	: 'Hello Jane Doe.';
console.log(greeting);

const selectTheme = document.getElementById('theme');
const html = document.querySelector('html');
const themeShowOffText = document.getElementById('themeShowOff');

document.body.style.padding = '10px';

function update(bgColor, textColor) {
	html.style.backgroundColor = bgColor;
	html.style.color = textColor;
}

selectTheme.addEventListener('change', () =>
	selectTheme.value === 'black'
	? update('black', 'white')
	: update('black', 'green')
);

selectTheme.addEventListener('change', () => {
	themeShowOffText.style.visibility = 'visible';
});

const selectLine = document.getElementById('line');
const explanation = document.getElementById('lineExplanation');

selectLine.addEventListener('change', showExplanation);

function showExplanation(){
	const choice = selectLine.value
	
	if (choice === 'white-single-solid'){
		explanation.textContent = 'A single solid white line means that the traffic is going in the same direction, for example one-way streets.'
	}
	else if (choice === 'white-double-solid'){
		explanation.textContent = 'Double solid lines mark a barrier between a regular use lane and a preferential use lane (HOV lane). Do not ever change lanes over double solid white lines.'
	}
	else if (choice === 'white-broken'){
		explanation.textContent = 'White broken lines mean that there are two or more lanes going in the same direction.'
	}
	else if (choice === 'yellow-single-solid'){
		explanation.textContent = 'A single yellow solid line marks the center of a road with two-way traffic.'
	}
	else if (choice === 'yellow-double-solid'){
		explanation.textContent = 'Never pass over double solid yellow lines. Stay to the right of them unless: you are in a HOV carpool that has a designated entrance on the left, making a left turn across single set of double yellow lines to exit a driveway or private road or when making a U-turn, instructed by constructions or signs to drive on the other side.'
	}
	else if (choice === 'yellow-broken'){
		explanation.textContent = 'A yellow broken line means that you may pass if the broken line is next to the lane that you are currently occupying.'
	}
	else {
		explanation.textContent = '';
	}
}

let question = prompt('What is the "official" name of JavaScript?');

if (question == 'ECMAScript'){
	console.log('Right!');
} else {
	console.log("You don’t know? ECMAScript!");
}

let number = prompt('Give me a number', 0);

if (number > 0) {
	console.log(1);
} else if (number < 0) {
	console.log(-1);
} else {
	console.log(0);
}

let result = (a + b < 4) ? 'Below': 'Over';

let login = prompt('Enter your role:');

let message = (login == 'Employe') ? 'Hello' :
(login == 'Director') ?
'Greetings' :(login == '') ?'No login': '';

console.log(message);

switch (browser) {
  case "Edge":
    alert("You've got the Edge!");
    break;

  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    alert("Okay we support these browsers too");
    break;

  default:
    alert("We hope that this page looks ok!");
}

browser = prompt('What browser are you currently using?');

if (browser === 'Edge'){
	console.log("You've got the Edge!")
}
else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari'
	|| browser == 'Opera'){
		console.log("Okay we support these browsers too")
	}
else {
	console.log('We hope this page looks okay!')
}
