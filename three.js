var readlineSync = require('readline-sync');

function three() {
    var a = Number(readlineSync.question("enter the 1st no: "));
    var b = Number(readlineSync.question("enter the 2nd no: "));
    var c = Number(readlineSync.question("enter the 3rd no: "));
    if (a % 1 == 0 && b % 1 == 0 && c % 1 == 0) {
        if (a > b && b > c) {
            console.log("A");
        } else if (a < b && b < c) {
            console.log("C");
        } else if (b > a && b > c) {
            console.log("B");
        } else if (a == b && a == c) {
            console.log("The no's are equal");
        } else {
            console.log("input a valid number");
            three();
        }
    } else {
        console.log("Please enter valid number's");
        three();
    }
    three1();
}
three();

function three1() {
    var s = readlineSync.question("Do you whish to continue y/n : ");
    switch (s) {
        case (s = "y"):
            three();
            break;
        case (s = "n"):
            console.log("thank you !!!!");
            break;
        default:
            console.log("Enter a Valid Responce:");
            three1();
            break;
    }
}