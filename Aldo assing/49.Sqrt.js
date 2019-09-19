var readlineSync = require('readline-sync');

var thesqrt;

function sqrt() {
    var n = readlineSync.question("Enter the value: ");
    if (n < 0) {
        console.log("the number is negative enter a positive number: ")
        sqrt();
    }else if (n % 1 == 0) {
        thesqrt = n ** 0.5;
        console.log("Your sqrt is: " + thesqrt); 
    } else {
        console.log("you entered an alphabet: ")
        sqrt();
    }
}
sqrt();