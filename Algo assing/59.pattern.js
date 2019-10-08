var readlineSync = require('readline-sync');

var n = readlineSync.question("Enter the length of an array: ");
var arr = [];
for (let i = 1; i <= n; i++) {
    arr.splice(n, 0, i);
    console.log(arr.join(""));
}





