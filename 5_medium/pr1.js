/*
Logical && -> For non-boolean values this returns the first operand 
              if it can be converted to false, and the second operand otherwise
              *** If the first value is falsey, return that one
                  if not, return the second

Logical || -> For non-boolean values this returns the first operand if 
              is truthy, and the second operand otherwise.
              *** If the first value is truthy, return that one,
                  if not, return the second
*/


(false && undefined); // false
(false || undefined); // undefined

((false && undefined) || (false || undefined)); 
// (false) || (undefined) --> undefined


((false || undefined) || (false && undefined));
// (undefined) || (false) --> false


((false && undefined) && (false || undefined));
// (false) and (undefined) -> false


((false || undefined) && (false && undefined));
// (undefined) and (false) --> undefined


('a' || (false && undefined) || '');
// a and then short circuit --> 'a'

((false && undefined) || 'a' || '');
// (false) or (a) || (false) --> 'a'

('a' && (false || undefined) && '');
// true and (undefined) and false --> undefined

((false || undefined) && 'a' && '');
// (undefined) and 'a' --> undefined