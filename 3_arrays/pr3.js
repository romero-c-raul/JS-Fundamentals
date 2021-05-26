/*
ALGORITHM
  - Create a new array
  - Push values in first array to new array
  - Determine if second argument is an array
    - If it is, iterate through it and push to new array
    - It it is not, simple push as is to the new array
*/

function concat(array1, secondArgument) {
  let newCollection = [];

  for(let index = 0; index < array1.length; index += 1) {
    newCollection.push(array1[index]);
  }

  if (Array.isArray(secondArgument)) {
    for(let index = 0; index < array1.length; index += 1) {
      newCollection.push(secondArgument[index]);
    }
  } else {
    newCollection.push(secondArgument);
  }

  return newCollection;
}

console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3));                     // [1, 2, 3]
console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
console.log(concat([2, 3], 'four'));                // [2, 3, "four"]


const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
console.log('newArray:', newArray);                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
console.log('newArray:', newArray);                              // [2, 3, { a: "two", b: 3 }]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
console.log('arr3:', arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
console.log('arr3:', arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
console.log('obj:', obj);                                   // { a: "two", b: 3 }