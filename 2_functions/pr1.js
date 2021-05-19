// var myVar = 'This is global';

// function someFunction() {
//   var myVar = 'This is local';
// }

// someFunction();
// console.log(myVar);

// equivalent to:

function someFunction() {
  var myVar = 'This is local'; // Scope is local to function
}

var myVar; // global scope
myVar = 'This is global';

someFunction();
console.log(myVar); // output is 'This is global'