// let a = 7;

// function myValue(b) {
//   b += 10;
// }

// myValue(a);
// console.log(a);

// equivalent to:

function myValue(b) {
  // let b = 7;
  b += 10;
}

let a = 7;

myValue(a);
console.log(a); // output is 7