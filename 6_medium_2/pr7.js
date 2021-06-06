function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne(...args) {
    let result = '';
    for (let i = 0; i < args.length; i += 1) {
      result += String.fromCharCode(args[i]);
    }

    log(result); 
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101));
    anotherOne(116, 111); //Output is `to`, return is undefined
  }

  anotherAnotherOne(); // output is 'Welcome', return is undefined
  anotherOne(116, 104, 101); // output is 'the', return is undefined 
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33); 
// Output is 'Welcome'
//           'to'
//           'the'

// one() return value is function anotherOne. 
//This function is then called on line
// 25 with arguments 77, 97, 116, 114, 105, 120, 33. 

//Output is  'Matrix!'
// return value is undefined