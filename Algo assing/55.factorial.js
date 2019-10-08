var readlineSync = require('readline-sync');

var N = Number(readlineSync.question("Enter the Number: "))
var a = 1;


for (let i = 0; i < N; i++) {
    var b = i + 1;
    var c = a * b;
    a = c;
}
console.log(c)