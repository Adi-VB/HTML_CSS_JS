var readlineSync = require('readline-sync');

var N = readlineSync.question("Enter the no of elements in the series: ")

var a = 2;
var arr = [];

for (let i = 0; i < N; i++) {
    a += 13*i;
    arr.push(a);
}
console.log(arr.join(","))