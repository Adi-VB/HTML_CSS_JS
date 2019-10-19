var readlineSync = require('readline-sync');

var arr = [];
var A;
function maxarray() {
    var N = readlineSync.question("Enter the length of array: ");
    for (let n = 0; n < N; n++) {
        ele(n);
    }
    console.log(arr);
    A = arr[0];
    B = arr[0];
    for (let j = 0; j < arr.length; j++) {
        if (Number(arr[j]) > Number(A)) {
            A = Number(arr[j]);
        }
    }
    console.log(A);
    for (let k = 0; k < arr.length; k++) {
        if (Number(arr[k]) < Number(B)){
            B = Number(arr[k]);
        }
    }
    console.log(B)
}
maxarray();

function ele(n) {
    var n = readlineSync.question("Enter element: ");
    arr.push(n);
}