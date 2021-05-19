// logValue();

// function logValue() {
//   console.log('Hello, world!');
// }

// equivalent to:

// function logValue() {
//   console.log('Hello, world!');
// }

// logValue(); // output is "Hello World"


// var logValue = 'foo';

// function logValue() {
//   console.log('Hello, world!');
// }

// console.log(typeof logValue);

// equivalent to:

function logValue() {
  console.log('Hello, world!');
}

var logValue; // This is redundant
logValue = "foo";

console.log(typeof logValue); // output is string


