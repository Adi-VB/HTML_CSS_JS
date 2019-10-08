var readlineSync = require('readline-sync');

var N = Number(readlineSync.question("Enter the Number of elements: "))
var arr = [];
var a = 1;
var sum = 0;
for (let j = 1; j <= N; j++) {
    for (let i = 0; i < j; i++) {
        var b = i + 1;
        var c = a * b;
        a = c;
    }
    arr.push((j ** j)/c);
    a = 1;
}
console.log(arr)

for (let k = 0; k < arr.length; k++) {
    sum = Number(sum) + Number(arr[k]);
}
console.log("The sum of factorial series is: " + sum)