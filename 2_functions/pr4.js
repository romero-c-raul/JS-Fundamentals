var myVar = 'This is global'; // This variable has global scope

function someFunction() {
  console.log(myVar); // myVar is accessible within the function
}

someFunction(); // output is 'This is global'