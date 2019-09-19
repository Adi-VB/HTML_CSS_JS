var readlineSync = require('readline-sync');

// temp method:
var temp;
var n = readlineSync.question("Enter the 1st number: ");
var m = readlineSync.question("Enter the 2nd number: ");
n = temp;
n = m;
m = temp;
console.log(n);
console.log(m);

// With "+" and "-" operators:
var x = Number(readlineSync.question("Enter 1st element: "));
var y = Number(readlineSync.question("Enter 2nd element: "));

x = x + y;
y = x - y;
x = x - y;
console.log(x);
console.log(y);

// with "*" and "/" operators:

var x = Number(readlineSync.question("Enter 1st element: "));
var y = Number(readlineSync.question("Enter 2nd element: "));

x = x * y;
y = x / y;
x = x / y;
console.log(x);
console.log(y);

// using XOR:
var x = Number(readlineSync.question("Enter 1st element: "));
var y = Number(readlineSync.question("Enter 2nd element: "));

x = x ^ y;
y = x ^ y;
x = x ^ y;
console.log(x);
console.log(y);

// using XNOR: 

var x = Number(readlineSync.question("Enter 1st element: "));
var y = Number(readlineSync.question("Enter 2nd element: "));

x = ~(x ^ y);
y = ~(x ^ y);
x = ~(x ^ y);
console.log(x);
console.log(y);

