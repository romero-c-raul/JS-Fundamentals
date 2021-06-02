let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
  // Line above is equivalent to b[2] = 3 + 7
}

myValue(a); // return value is undefined because return keyword was not used
console.log(a); // output is [1, 2, 10] since array was mutated on line 4