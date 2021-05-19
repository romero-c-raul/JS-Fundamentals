let rlSync = require("readline-sync");
phrase = rlSync.question("Please enter a phrase: ");
onlyChars = phrase.replace(/[^a-z]/gi, "")

console.log(onlyChars);

let message = `There are ${onlyChars.length} characters in "${phrase}"`;
console.log(message);