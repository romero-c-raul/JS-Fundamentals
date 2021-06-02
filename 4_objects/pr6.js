const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  // return sum / array.length;
  return sum / Object.keys(array).length;

}

console.log(average(myArray));

/*
The user's expectation is incorrect. On the first iteration of the for loop,
  we are accessing the value of the '-2' property and adding it to the sum.
On the second iteration, we are accessing the value of the '-1' property
  and adding it to the sum
On the third and fourth iterations, we are accessing the elements in index 0 and index 1
  (respectively) and adding them to the sum

This ends up with the final value in the sum variable being 20. This 20 is then divided
  by the array length, which is 2. This means that the function wont return 5, but 10. And
  This is because length only considers elements of the array when calculation the size of
  the array
 */

