function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum; // Trying to add values to undefined will return NaN

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum; // function returns undefined by default
}

// No, trying to add a value to undefined returns NaN, and trying to multiple undefined
// return NaN as well