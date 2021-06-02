const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1]; // Should return 'd'
myObject['a']; // Raises uncaught reference error, should be written as a string
myObject.a; // Returns name

// Observations: When using dot notation, property does not have to be a string
//               When using bracket notation, property has to be types in string format
//               or else it will look up a variable that has not been declared