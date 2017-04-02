// function add (a, b) {
//   return a + b;
// }

// console.log(add(3,1));

// var toAdd = [9,5];
// console.log(add(...toAdd));


var groupA = ['bob', 'bill', 'billy'];
var groupB = ['sally'];

var final = [3, ...groupA, ...groupB];

console.log(final);

var person = ['andrew', 25];
var personTwo = ['bob', 40];

function printShit(name, age) {
  console.log(`hi, ${name}. you are ${age} years old.`);
}

printShit(...person);
printShit(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach(function (name) {
  console.log(`hi ${name}`);
})