var readlineSync = require('readline-sync');

var s;
var arr1 = [];
var sum = 0;
var s = readlineSync.question("enter the binay number: ");
spl = s.split("").reverse();
for (let i = 0; i < spl.length; i++) {
    dec = spl[i] * (2 ** i);
    arr1.push(dec);
}
for (let j = 0; j < arr1.length; j++) {
    sum = Number(sum) + Number(arr1[j]);
}
console.log("your dec equivalent is: " + sum);