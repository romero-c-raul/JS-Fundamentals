function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

console.log(calculateBonus(2800, true));               // 1400
console.log(calculateBonus(1000, false));              // 0
console.log(calculateBonus(50000, true));              // 25000

/*
This works because the arguments object contains all the arguments that were passed to
the array in array form
This means that when using the ternary operator, we are check what the second element
  of the array is, which is the second argument of our function.
  If the second element of the arguments array is true, then we divide the first element
  of the arguments object by 2 and return that value
  If it is false, we simply return zero
*/