var readlineSync = require('readline-sync');

var arr = [];
var temp;

function array() {
    var N = readlineSync.question("Enter the length of array: ");
    if (N % 1 == 0) {
        for (let n = 0; n < N; n++) {
            ele(n);
        }
        console.log(arr);
    }else{
        console.log("Enter the valid number: ")
        sumarray();
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] 
    }
    console.log(arr);
}

function ele() {
    var n = readlineSync.question("Enter element: ");
    arr.push(n);
}
array();