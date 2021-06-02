/*
ALGORITHM
- Check if first character in the string is - or +
- Slice character from 1 to the end if there is a sign
- At the end of the function, multiply by -1 if the sign was negative and leave as is
  if sign is positive
*/

function stringToSignedInteger(string) {
  if (string.includes('-') || string.includes('+')) {
    var sign = string[0];
    string = string.slice(1);
  }

  let exponent = string.length - 1;
  let total = 0;

  for(let index = 0; index < string.length; index += 1) {
    let currentChar = string[index];
    total += currentChar * (10 ** exponent)
    exponent -= 1;
  }

  total = sign === '-' ? total *= -1 : total;
  console.log(total);
}

stringToSignedInteger('4321');      // 4321
stringToSignedInteger('-570');      // -570
stringToSignedInteger('+100');      // 100