var readlineSync = require("readline-sync");

var N = readlineSync.question("Enter the String: ")

var str = "";

for (let i = 0; i < N.length; i++) {
    if (N.charAt(i) != " ") {
        str = str + N.charAt(i);
    }
}
console.log(str);

var a = str.split("").reverse().join("");

console.log(a);


