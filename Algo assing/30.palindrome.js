var readlineSync = require("readline-sync");

var N = readlineSync.question("Enter the String: ")

var str = "";
var count = 1;

for (let i = 0; i < N.length; i++) {
    if (N.charAt(i) != " ") {
        str = str + N.charAt(i);
    }
}
console.log(str)
if (str.length % 2 == 0) {
    for (let j = 0; j < str.length / 2; j++) {
        if (str.charAt(j) == str.charAt(str.length - j - 1)) {
            count++;
        }
    }
    console.log(count)
    if (count == str.length / 2) {
        console.log("Palindrome")
    } else {
        console.log("Not Palindrome")
    }
} else {
    for (let j = 0; j < Math.floor(str.length / 2); j++) {
        if (str.charAt(j) == str.charAt(str.length - j - 1)) {
            count++;
        }
    }
    console.log(count)
    if (count == (Math.floor(str.length / 2))) {
        console.log("Palindrome")
    } else {
        console.log("Not Palindrome")
    }
}