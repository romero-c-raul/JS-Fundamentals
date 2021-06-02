const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function signedIntegerToString(number) {
  if (number === 0) return 0;

  let result = '';
  
  if (-number > 0) {
    number = -number;
    var sign = '-';
  }


  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  if (sign) {
    return sign + result;
  } else {
    return "+" + result;
  }
}

signedIntegerToString(4321);      // "+4321"
signedIntegerToString(-123);      // "-123"
signedIntegerToString(0);         // "0"