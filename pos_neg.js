function posneg(n) {
    var readlineSync = require('readline-sync');
    var n = readlineSync.question("Enter the number: ");
    if (n < 0) {
        console.log("The given number is negative");
    } else if (n > 0) {
        console.log("The given number is Positive!!!");
    } else {
        console.log("Enter a Valid Number!!!!")
    }
    posneg2();
}
posneg();

function posneg2(s) {
    var readlineSync = require('readline-sync');
    var s = readlineSync.question("do you want to continue y/n: ");
    switch (s) {
        case (s = "y"):
            posneg();
            break;
        case (s = "n"):
            console.log("Thank you");
            break;
        default:
            console.log("please enter a valid option");
            posneg2();
            break;
    }
}