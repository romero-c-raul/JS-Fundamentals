const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges'; // adding property with name '3.4' with value 'Oranges'
console.log(array.length); // Obtaining the last element index  + 1 --> returns 3
console.log(Object.keys(array).length); // Obtains all keys (elements + properties) and counts them
// returns 4

array[-2] = 'Watermelon'; // adding property with name '3.4' with value 'Oranges'
console.log(array.length); // Obtaining the last element index  + 1 ---> returns 3
console.log(Object.keys(array).length); // Obtains all keys (elements + properties) and counts them
// returns 5

// length counts the number of array elements in the array.
// An property is considered an element if its key is a non negative integer
// Empty slots and undefined values are also considered when obtaining the length
// of an array