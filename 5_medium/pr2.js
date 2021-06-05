let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
    // i += 1;
  } else {
    i += 1;
  }
}

/*
On line 1, we are declaring variable `i` with keyword `let` and initializing it to number 0

On lines 2 - 8, we have a `while` loop that will run while the value of `i` is less
  than 10

On lines 3-7 we have an if..else conditional statement
that is evaluating if `i` is divisible by 3
  - If it is, we will log to the console the value of i
  - If it is not, we will increase the value of i by one

The console will output 0 repeatedly, since we never get to line 6 in our code. After each
if statement, `0 % 3 === 0` evaluates to true and then the output to the console is 0. We 
then start from the top of the while loop and the same thing happens over and over again.
To make this code work, we need to increase the value of i by one immediately after line 4;
 */