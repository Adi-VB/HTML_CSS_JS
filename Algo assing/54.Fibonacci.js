var readlineSync = require('readline-sync');

var N = readlineSync.question("Enter the Number of Elements in the Series: ");

var arr = [1];
var arr1 = [1];
var a = 0;
var b = 1;
var c;
var n = 1;
do {
    c = a + b;
    arr1.push(c);
    a = b;
    b = c;
    n++;   
} while (n < N);

console.log(arr1)
a = 0;
b = 1;

do {
    c = a + b;
    arr.push(c);
    a = b;
    b = c;  
} while (c < N);

console.log(arr)