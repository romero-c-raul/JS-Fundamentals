function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// After hoisting

// function debugIt() {
//   function logger() {
//     console.log(status);
//   }

//   const status = 'debugging';

//   logger();
// }

// debugIt();

// Output is 'debugging'