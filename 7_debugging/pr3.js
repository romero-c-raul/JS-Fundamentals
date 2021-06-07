function placeABet(guess) {
  (function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  });

  const winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

const userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
alert(placeABet(userGuess));

// Error is raised when trying to call the generateRandomInt method because
// it is a function expression (not a declaration) due to it being wrapped 
// in parenthesis. Since it is a function expression, the function name
// is only available from inside the function

// You can fix the program by declaring a variable with the name
// `generateRandomInt` and initializing it to the function expression on line 2