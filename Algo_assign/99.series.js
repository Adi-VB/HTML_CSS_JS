var readlineSync = require('readline-sync');

var N = readlineSync.question("Enter the no of elements in the series: ")
var a = 1,
    b = 3,
    c = 4,
    sum;
var arr = [a, b]
for (let i = 2; i < N; i++) {
    sum = a + b + c;
    arr.push(sum);
    a = b;
    b = c;
    c = sum;
}
console.log(arr.join(","))