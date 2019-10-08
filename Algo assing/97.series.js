var readlineSync = require('readline-sync');


var N = readlineSync.question("Enter the no of elements in the series: ")

var arr = [1];

function series() {
    for (let i = 0; i < N; i++) {
        if (i % 2 == 0) {
            var x = (arr[i] * 2);
            arr.push(x);
        }
        if (i % 2 != 0) {
            arr.push(arr[i] * 3 / 2);
        }
    }
    console.log(arr)
}
series()