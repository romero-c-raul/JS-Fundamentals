let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));

/*
On line 1, we are declaring variable `startingBalance` using keyword `let` and initializing
it to number 1

On line 2, we are declaring variable `chicken` using keyword `const` and initializing it
to number 5

On line 3, we are declaring variable `chickenQuantity` using keyword `const` and initializing
it to number 7

On lines 5 to 7, we have the function declaration for the `totalPayable` function with two
parameters `item` and `quantity`

On line 9, we are re-assigning variable `startingBalance` to number 5;

On line 10, we are calling the totalPayable function with two arguments:
  `chicken` and `chickenQuantity`. 
  - Variable `chicken` has a value of 5 and `chickenQuantity` has a value of 7
  - Within the function, we are also referencing `startingBalance` which at this point has a 
    value of 5
  - The return of this function call is 40
    - This is because on line 6, we are returning the value obtained after the following
      math operation is performed: 5 + (7 * 5)
  - We then call console.log on the return value which outputs `40` to the console

On line 12, we are re-assigning `startingBalance` to number 10

On line 13, we are calling the totalPayable function with two arguments:
  `chicken` and `chickenQuantity`. 
  - Variable `chicken` has a value of 5 and `chickenQuantity` has a value of 7
   - Within the function, we are also referencing `startingBalance` which at this point has a 
    value of 10
  - The return of this function call is 45
  - This is because on line 6, we are returning the value obtained after the following
    math operation is performed: 10 + (7 * 5)
  - We then call console.log on the return value which outputs `45` to the console

The reason why we are able to reference `startingBalance` within the function, is because
of JavaScript's lexical scope rules. This allows us to reference variables that were declared
in the same scope that the function itself was declared in --> MAYBE???

LS material says this is related to closures but I disagree.
 */