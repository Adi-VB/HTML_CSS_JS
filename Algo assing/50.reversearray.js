var readlineSync = require('readline-sync');

var arr = [];
var temp;

function array() {
    var N = readlineSync.question("Enter the length of array: ");
    if (N % 1 == 0) {
        for (let i = 0; i < N; i++) {
            ele(i);
        }
    }else{
        console.log("Enter the valid number: ")
        sumarray();
    }
    console.log(arr);
    if (arr.length % 2 == 0) {
        for (let i = 0; i < arr.length - (arr.length/2); i++) {
            temp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length -1 - i] = temp;
        }
        console.log(arr)
    } else {
        for (let i = 0; i < arr.length - Math.floor(arr.length/2); i++) {
            temp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length -1 - i] = temp;
        }
        console.log(arr)
    }
}

function ele() {
    var n = readlineSync.question("Enter element: ");
    arr.push(n);
}
array();