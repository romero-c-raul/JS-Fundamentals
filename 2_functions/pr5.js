function someFunction() {
  myVar = 'This is global'; // global variable re-assigned to 'This is global'
}

someFunction();
console.log(myVar); // output is "This is global"
