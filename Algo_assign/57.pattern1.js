var readlineSync = require('readline-sync');

var n = readlineSync.question("Enter the length of an array: ");
var arr = [];
for (let i = 0; i < n; i++) {
    var a = readlineSync.question("Enter the elements: ");
    arr.push(a);
}
console.log(arr.join(""))

for (let j = 0; j <= arr.length + 1; j++) {
    arr.splice((arr.length - 1), 1)
    console.log(arr.join(""));
}