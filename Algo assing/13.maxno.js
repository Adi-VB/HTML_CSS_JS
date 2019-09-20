// var readlineSync = require('readline-sync');

// var arr = [];
// var A;
// function maxarray() {
//     var N = readlineSync.question("Enter the length of array: ");
//     for (let n = 0; n < N; n++) {
//         ele(n);
//     }

//     console.log(arr);
//     A = arr[0];
//     for (let j = 0; j < arr.length; j++) {
        
//         if (arr[j] > A) {
//             A = arr[j];
//         }
//     }
//     console.log(A);
// }
// maxarray();

// function ele(n) {
//     var n = readlineSync.question("Enter element: ");
//     arr.push(n);
// }

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
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] < arr[j+1]) {
            A = arr[j+1];
        }
    }
    console.log(A);
}
maxarray();

function ele(n) {
    var n = readlineSync.question("Enter element: ");
    arr.push(n);
}