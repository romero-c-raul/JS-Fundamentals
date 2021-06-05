// Code Snippet 1
// var counter = 5;
// var rate = 3;
// console.log('The total value is ' + String(counter * rate));

// function counter(count) {
//   // ...
// }

// Output is 'The total value is 15'

// Code Snippet 2
// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + String(counter * rate));

// var counter = 5;
// var rate = 3;

// Output is 'The total value is NaN'

// Code Snippet 3
// var counter = 5;
// var rate = 3;

// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + String(counter * rate));

// Output is 'The total value is 15'

let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// Output is 'The total value is 15' ---> WRONG
// An exception is raised because we tried to declare a variable with the same name twice:
//  - We declared variable counter
//  - Then we have a function declaration which declares a variable with the same name as the
//    function name
// JS does not allow this so a syntax error is raised
