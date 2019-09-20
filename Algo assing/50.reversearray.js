var readlineSync = require('readline-sync');

var arr = [];
var arr2 = [];
var temp;

function array() {
    var N = readlineSync.question("Enter the length of array: ");
    if (N % 1 == 0) {
        for (let i = 0; i < N; i++) {
            ele(i);
        }
        console.log(arr);
    }else{
        console.log("Enter the valid number: ")
        sumarray();
    }
    for (let i = 0; i < arr.length; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length -1 - i] = temp;
    }
    console.log(arr);
}

function ele() {
    var n = readlineSync.question("Enter element: ");
    arr.push(n);
}
array();