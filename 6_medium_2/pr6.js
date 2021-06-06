const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // outputs the array as it is above
console.log(languages.length); // outputs 3

languages.length = 4; // increase language's array property by 1
console.log(languages); // outputs ['JavaScript', 'Ruby', 'Python', <empty slot>]
console.log(languages.length); // outputs 4

languages.length = 1; // decreasing language's array property to 1
console.log(languages); // outputs ['JavaScript'], array got shortened
console.log(languages.length); // outputs 1

languages.length = 3; // increased language's array property to 3
console.log(languages); // outputs ['JavaScript', <2 empty slots>]
console.log(languages.length); // outputs 3

languages.length = 1; // decreasing language's array property to 1
languages[2] = 'Python'; // inserting an element into the array on index 2
// This effectively increases the length of the array to 3
console.log(languages); // outputs ['JavaScript', <1 empty slot>, 'Python']
console.log(languages[1]); // outputs 'undefined'
console.log(languages.length); // outputs 3