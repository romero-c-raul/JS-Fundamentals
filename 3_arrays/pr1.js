let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();                    // Deletes last element of array
console.log(myArray);             // Outputs [1, 2, 3]
console.log(myOtherArray);        // Outputs [1, 2, 3]

myArray = [1, 2];                 // Re-assigned myArray to a new array
console.log(myArray);             // Output is [1, 2]
console.log(myOtherArray);        // Output is [1, 2, 3]
