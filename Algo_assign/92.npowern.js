var readlineSync = require('readline-sync');

var n = readlineSync.question("Enter the value: ");
var arr = [];
var sum = 0;
for (let i = 1; i <= n; i++) {
    arr.push(i ** i);
}
console.log(arr)
for (let j = 0; j < arr.length; j++) {
    sum = Number(sum) + Number(arr[j]);
}
console.log("Your sum is: " + sum)