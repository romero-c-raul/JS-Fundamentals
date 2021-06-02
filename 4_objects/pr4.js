const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]); 
console.log(myObject.prop2);

/*
On lines 1 - 5, we are declaring a variable `myObject` using keyword const.
  - This variable is pointing to an object that contains three properties

On line 7, we are declaring a variable `prop2` with keyword const that has a value
  of '456' (string literal)

On line 8, we are using bracket notation to update the property value of `'prop2` to 
  a different value `'456'`

On line 9, we are using bracket notation to create a new key value pair
  `'456': '678'

On line 11, the output will be `678`
On line 12, the output will be `456`
 */


const myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj);
myObj[myFunc()] = 'world!';
console.log(myObj);

/*
On line 32, we are declaring a variable `myObj` using keyword const. This variable is 
  assigned to an empty object

On line 33, we are using bracket notation to create a new property of `myObj`. This
  within the brackets, we are using the return value obtained after invoking function
  `myFunc` and we use that as a key with the value being `hello`
  - This means that the property is 'funcProp': 'hello'

On line 39, we are method log and passing myObj as an argument. The output is
  {
    'funcProp': 'Hello'
  }

On line 40, we are using bracket notation to update the myObj property 'funcProp' to
  the stirng 'world'

On line 41, the output is:
  {
    'funcProp': 'world'
  }
 */