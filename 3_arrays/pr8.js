function slice(array, begin, end) {
  if (begin > end) {
    return [];
  }

  let slicedArray = [];

  for(let index = begin; index < end; index += 1) {
    if (index === array.length) {
      break;
    }

    slicedArray.push(array[index]);
  }

  return slicedArray;
}

console.log('slice([1, 2, 3], 1, 2):', slice([1, 2, 3], 1, 2));               // [2]
console.log('slice([1, 2, 3], 2, 0):', slice([1, 2, 3], 2, 0));               // []
console.log('slice([1, 2, 3], 5, 1):', slice([1, 2, 3], 5, 1));               // []
console.log('slice([1, 2, 3], 0, 5):', slice([1, 2, 3], 0, 5));               // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log('slice(arr1, 1, 3):', slice(arr1, 1, 3));                     // [2, 3]
console.log('arr1:', arr1);                                  // [1, 2, 3]