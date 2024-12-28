const birthYear = 1947;
const thisYear = 1965;
const firstName = 'Carlos';
const lastName = 'Stevenson';
const fullName = 'Carlos' + ' ' + lastName;
const age = thisYear - birthYear;

greeting = ('Hello! My name is ' + firstName + ' ' + lastName +
' and I am ' + (thisYear - birthYear) + ' years old.');
console.log(greeting);

greetingUpdated = ('Hello! My name is ' + fullName + ' ' + 'and I am '+ age + ' old.');