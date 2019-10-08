var readlineSync = require('readline-sync');


var n = readlineSync.question("Enter your number: ")
var a = 1;

function series() {
    if (n == 4 ** a) {
        console.log("Belongs to series")
    } else if (n > 4 ** a) {
        a++;
        series();
    } else {
        console.log("does not belong to the series")
    }
}
series();