var readlineSync = require('readline-sync');
var a = Number(readlineSync.question("enter a value: "));
var b = Number(readlineSync.question("enter b value: "));
var c = Number(readlineSync.question("enter c value: "));
var x1, x2;
x1 = (-b + (b**2 - 4*a*c)**0.5)/(2*a);
x2 = (-b - (b**2 - 4*a*c)**0.5)/(2*a);
console.log(x1);
console.log(x2);