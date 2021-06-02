const myArray = ['a', 'b', 'c'];

console.log(myArray[0]);
console.log(myArray[-1]);

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]);
console.log(myArray['e']);
console.log(myArray);

/*
On line 1, we are declaring a constant variable myArray that is assigned to an array
  of three elements

On line 3, we are using bracket notation to access the first element of the array,
  thisreturns the string 'a', and the output is 'a'
On line 4, we are trying to access a property of the array object. Since this property
  does not exist, the return value is undefined and the output to the console is undefined

On line 6, we are using bracket notation to create the property `-1` with value 'd'
  on the array that myArray variable is pointing to.
On line 7, we are using bracket notation to create another property `'e'` with value `5`
  on the array that myArray variable is pointing to
On line 8, we are inserting a new element 'f' on index 3 of the array that myArray variable
  is pointing to

On line 10, the output is 'd'
On line 11, the output is 5
On line 12, the output is ['a', 'b', 'c', 'f', '-1': 'd', 'e', 5]
 */