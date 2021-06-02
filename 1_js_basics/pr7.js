/*
ALGORITHM
- Iterate through each character in the string
  - Multiply each character according to its position in the string
    - For example, if we have '4321'
      - 4 is multiplied by 1000
      - 3 is multiplied by 100
      - 3 is multiplied by 10
      - 1 is multiplied by one
  - Add that value to a total counter
  - Return that total counter
*/

function stringToInteger(string) {
  let exponent = string.length - 1;
  let total = 0;

  for(let index = 0; index < string.length; index += 1) {
    let currentChar = string[index];
    total += currentChar * (10 ** exponent)
    exponent -= 1;
  }

  console.log(total);
}

stringToInteger('4321');      // 4321
stringToInteger('570');       // 570