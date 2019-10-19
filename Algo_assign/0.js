var readlineSync = require('readline-sync');

var N = readlineSync.question("Enter the no of ele in array:")
var arr = [];
for (let i = 0; i < N; i++) {
    var n = Number(readlineSync.question("Ele: "));
    arr.push(n);
}
console.log(arr)
var a = 0;
var arr1 = [];

function repeat() {
    while (a < arr.length) {
        for (let j = a + 1; j < arr.length; j++) {
            if (arr[a] == arr[j]) {
                arr1.push(arr[j]);
            }
        }
        a++;
    }
    console.log(arr1)
}
repeat();