function pop(array) {
  if (array == 0) return undefined;

  let lastElement = array[array.length - 1];
  array.length = array.length - 1;

  return lastElement;
}

function push(...args) {
  let mainArray = args[0];

  for(let index = 1; index < args.length; index += 1) {
    mainArray.push(args[index]);
  }

  return mainArray.length;
}

// pop
const array1 = [1, 2, 3];
console.log(pop(array1));                        // 3
console.log(array1);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

console.log(" ")

// push
const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0