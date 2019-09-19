var readlineSync = require('readline-sync');

var pow;

function power() {
    var n = readlineSync.question("Enter the element: ");
    var m = readlineSync.question("Enter the power: ");
    if (n % 1 == 0 && m % 1 == 0) {
        
    } else {
        console.log("Enter a valid Number: ")
        power();
    }
    console.log(pow);
}
power();