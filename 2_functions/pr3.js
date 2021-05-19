// var myVar = 'This is global';

// function someFunction() {
//   myVar = 'This is local';
// }

// someFunction();
// console.log(myVar);

//equivalent to:

function someFunction() {
  myVar = 'This is local'; // global variable is reassigned
}

var myVar;
var myVar; // One of these is redundant

myVar = "This is global";

someFunction(); // Function call re-assigned myVar to 'This is local'
console.log(myVar); // output is 'This is local'