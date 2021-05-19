let a = 7; // global variable

function myValue(a) {
  // let a = 7;
  a += 10; // We are re-assigning local var 'a'
}

myValue(a);
console.log(a); // output is 7