var readlineSync = require('readline-sync');

var arr = [];
var sum = 0;
var sum1 = 0;

function identity(N) {
    var N = readlineSync.question("Enter the Order of the matrix NxN: ")
    console.log("Enter the elements of the matrix: ")
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            matele();
        }
    }
    console.log(arr);
    for (let a = 0; a < N; a++) {
        sum = sum + Number(arr[(a * N) + a]);
    }
    console.log(sum);
    for (let b = 0; b < N; b++) {
        sum1 = sum1 + Number(arr[b * N]);
    }
    console.log(sum1);
}

function matele(x) {
    var x = readlineSync.question("Enter the element: ");
    arr.push(x);
}
identity();