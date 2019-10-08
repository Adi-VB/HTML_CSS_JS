var readlineSync = require('readline-sync');

var n = readlineSync.question("Enter the no of elements: ");
var arr = [];
var a = 1;
var b = 2;
var sum = 0;
for (let i = 0; i < n-1; i++) {
    if (i % 2 == 0) {
        var x = a / b;
        arr.push(x);
        var c = b;
        var d = (c + 1);
    }

    if (i % 2 != 0) {
        var y = -(c / d);
        arr.push(y);
    }
    a = c + 1;
    b = d + 1;
}
console.log(arr);
for (let j = 0; j < arr.length; j++) {
    sum = Number(sum) + Number(arr[j]);
}
console.log(sum)