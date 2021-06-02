const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
    array2[i] = array2[i].toUpperCase();
  }
}

console.log(array1);
console.log(array2);

/*
The output will be ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo']
At first, you might think that because we mutated the first array, that will somehow affect
the second array. 

This is false, because we are not mutating strings in line 10, we are simply
re-assigning the current element of the array to a different string. Since the string
was not mutated (also strings are immutable in JS) we do not see a change on the second
array
 */