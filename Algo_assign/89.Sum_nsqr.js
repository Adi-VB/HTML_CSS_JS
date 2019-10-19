var readlineSync = require('readline-sync');

var N = readlineSync.question("Enter the Number: ")
var O = (Number(N) + 1);
var P = ((2 * Number(N)) + 1);
var M = (N * O * P);

if (N % 1 == 0) {
    console.log("The sum is: " + M / 6);
} else {
    console.log("Enter a Valid Number: ")
}