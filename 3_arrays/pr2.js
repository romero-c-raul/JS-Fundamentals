let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

// We can use the slice method or use map to create a copy of the array:
// const myOtherArray = myArray.slice();
// const myOtherArray = myArray.map(element => {
//   return element
// });

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);
