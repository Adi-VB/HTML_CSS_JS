var readlineSync = require('readline-sync');

var arr = [];
var arr1 = [];
function mat() {
    var N = readlineSync.question("Enter the Order of the matrix NxN: ")
    console.log("Enter the elements of the 1st matrix: ")
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            matele();
        }
    }
    console.log(arr);
    var M = readlineSync.question("Enter the Order of the matrix NxN: ")
    console.log("Enter the elements of 2nd matrix: ")
    for (let k = 0; k < M; k++) {
        for (let l = 0; l < M; l++) {
            matele1();
        }
    }
    console.log(arr1);
}

function matele(x) {
    var x = readlineSync.question("Enter the element: ");
    arr.push(x);
}
function matele1(y) {
    var y = readlineSync.question("Enter the element: ");
    arr1.push(y);
}
mat();