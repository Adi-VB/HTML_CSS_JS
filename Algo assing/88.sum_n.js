var readlineSync = require('readline-sync');

var n = Number(readlineSync.question("Enter the no of natural numbers: "));
var m = Number(n * (n + 1));

if (n % 1 == 0) {
    console.log("Your sum is: " + m/2);
} else {
    console.log("input a valid value !! ")
}