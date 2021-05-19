const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) { // evaluates to true, so code below should execute
  console.log('Hello');
}

if (!myString) { // evaluates to false, so code below won't execute
  console.log('World');
}

if (!!myArray) { // Evaluates to true
  console.log('World');
}

if (myOtherString || myArray) { // false or true -> true
  console.log('!');
}