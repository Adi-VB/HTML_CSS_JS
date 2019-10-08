var readlineSync = require('readline-sync');

var N = readlineSync.question("Enter the Number of Elements in the Series: ");

var arr = [1];
var a = 0;
var b = 1;
var c;
do {
    c = a + b;
    arr.push(c);
    a = b;
    b = c;   
} while (c < N);

console.log(arr)


