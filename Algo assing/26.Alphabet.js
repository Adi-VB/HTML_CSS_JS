var readlineSync = require("readline-sync");

var a = readlineSync.question("Enter the value: ")
if (a.length < 2) {
    if (a % 1 == 0) {
        console.log("The given value is a number !!")
    } else {
        console.log("The given value is an alphabet !!!")
    }
}else if (a.length > 1 && a % 1 == 0) {
    console.log("The given value is a number.")
}else {
    console.log("The given value is a string of alphabets")
}