var readlineSync = require('readline-sync');

var arr = [];
var med;

function median() {
    var N = readlineSync.question("Enter the length of array: ");
    for (let n = 0; n < N; n++) {
        ele(n);
    }
    console.log(arr);
    if (arr.length % 2 == 1) {
        med = Number(arr[Math.floor(arr.length / 2)]);
    } else if (arr.length % 2 == 0) {
        med = (Number(arr[arr.length / 2 - 1]) + Number(arr[(arr.length / 2)])) / 2;
    }
    console.log("your median is: " + med)
}

function ele(n) {
    var n = readlineSync.question("Enter element: ");
    if (n % 1 == 0) {
        arr.push(n);
    } else if (n % 1 != 0){
        console.log("Enter a number as an element: ");
        ele();
    }
}
median();