// var myVar = 'This is global';

// function someFunction() {
//   var myVar = 'This is local';
//   console.log(myVar);
// }

// someFunction();

// equivalent to:

function someFunction() {
  var myVar = 'This is local'; // scope is local to the function
  console.log(myVar); // outpout is 'This is local'
}

var myVar = 'This is global'; // global scope

someFunction(); 
