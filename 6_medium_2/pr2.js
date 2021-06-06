const person = { name: 'Victor' };
// const otherPerson = { name: 'Victor' };
const otherPerson = person;

console.log(person === otherPerson);    // false -- expected: true

// Comparing these two objects with the `===` evaluates to false because it is 
// comparing whether the two objects are the same object
// To have this work as expected, we can initialize otherPerson to the object var person is
// pointing to