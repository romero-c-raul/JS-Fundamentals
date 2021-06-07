function includesFalse(list) {
  for (let i = 0; i < list.length; i++) {
    let element = list[i];

    if (element === false) {
      return true;
    }
  }

  return false;
}
                                                                  // returns:
includesFalse([8, null, 'abc', true, 'launch', 11, false]);       // true
includesFalse(['programming', undefined, 37, 64, true, 'false']); // false
console.log(includesFalse([9422, 'lambda', true, 0, '54', null]));             // true

// Last method call returns true because on line 5 we have an if conditional
// that is evaluating the conditional expression `0 == false`

// `==` is a non-strict equality operator that coerces an operand into a number,
// when that operand is a boolean, so we have 0 == '0'

// Then we have a second coercion of the first operand, the string,
// into a number, so we have '0' == '0' which evaluates to true.
