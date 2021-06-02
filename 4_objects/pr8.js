function penultimate(string) {
  // return string.split(' ')[-2];
  let wordCollection = string.split(' ');
  let lastIndex = wordCollection.length - 1;
  
  return wordCollection[lastIndex - 1];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"