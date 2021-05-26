function shift(array) {
  let firstChar = array[0];

  for(let index = 1; index < array.length; index += 1) {
    array[index - 1] = array[index];
  }

  array.pop();
  return firstChar;
}

function unshift(...args) {
  let copyArray = args[0].slice();
  let mainArray = args[0];
  mainArray.length = 0;

  for(let index = 1; index < args.length; index += 1) {
    mainArray.push(args[index]);
  }

  copyArray.forEach(element => {
    mainArray.push(element);
  });

  return mainArray.length;
}

console.log('shift([1, 2, 3]):', shift([1, 2, 3]));                  // 1
console.log('shift([]):', shift([]));                                // undefined
console.log('shift([[1, 2, 3], 4, 5]):', shift([[1, 2, 3], 4, 5]));  // [1, 2, 3]

console.log("");

console.log('unshift([1, 2, 3], 5, 6):', unshift([1, 2, 3], 5, 6));          // 5
console.log('unshift([1, 2, 3]):', unshift([1, 2, 3]));                      // 3
console.log('unshift([4, 5], [1, 2, 3]):', unshift([4, 5], [1, 2, 3]));      // 3

console.log("");

const testArray = [1, 2, 3];
console.log('shift(testArray):', shift(testArray));                // 1
console.log('testArray:', testArray);                              // [2, 3]
console.log('unshift(testArray, 5):', unshift(testArray, 5));      // 3
console.log('testArray:', testArray);                              // [5, 2, 3]