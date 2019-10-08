var readlineSync = require("readline-sync");
var num = readlineSync.question("Enter Number: ");
var factors = 0;
for (i = 2; i <= num; i++) {
    if (num % i == 0) {
        factors++;
    }
}
if (factors == 1) {
    console.log("prime");
} else {
    console.log("not prime");
}