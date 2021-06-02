const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName}`);
console.log(`${person.lastName}`);
console.log(`${person.firstName} ${person.lastName}`);

/*
The code above with output [Function: firstName] [Function: lastName] --- WRONG

The code actually outputs the function definitions of both functions
*/