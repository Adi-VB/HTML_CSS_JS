var readlineSync = require('readline-sync');

var n = readlineSync.question("Enter the Number: ")
var m;
var arr = [];
var sum = 0;
for (let i = 1; i <= n; i++) {
    m = (Number(i)*(Number(i)+1))/2;
    arr.push(m);
}
for (let j = 0; j < arr.length; j++) {
    sum = Number(sum) + Number(arr[j]);
}
console.log("The sum is: " + sum);