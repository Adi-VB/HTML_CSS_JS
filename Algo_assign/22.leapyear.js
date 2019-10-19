var readlineSync = require('readline-sync');

function year() {
    var y = readlineSync.question("Enter the year: ");
    if (y % 1 == 0) {
        if (y % 4 == 0) {
            console.log("Leap year !!!");
        } else {
            console.log("not a leap year");
        }
    } else {
        console.log("enter a valid year");
        year();
    }
    year2();
}
year();

function year2() {
    var s = readlineSync.question("do you wish to continue y/n : ");
    switch (s) {
        case (s = "y"):
            year();
            break;
        case (s = "n"):
            console.log("Have a Good Day :) ");
            break;
        default:
            console.log("input a valid Responce ");
            year2();
            break;
    }
}