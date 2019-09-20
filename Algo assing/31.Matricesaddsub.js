var readlineSync = require('readline-sync');

var arr = [];
var arr1 = [];
var arr3 = [];
var arr4 = [];

function mat(N) {
    var N = readlineSync.question("Enter the Order of the matrix NxN: ")
    console.log("Enter the elements of the 1st matrix: ")
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            matele();
        }
    }
    console.log(arr);
    console.log("Enter the elements of 2nd matrix: ")
    for (let k = 0; k < N; k++) {
        for (let l = 0; l < N; l++) {
            matele1();
        }
    }
    console.log(arr1);
    for (let x = 0; x < arr.length; x++) {
        for (let y = 0; y < arr1.length; y++) {
            if (x == y) {
                c = Number(arr[x]) + Number(arr1[y]);
                arr3.push(c);
            }
        }
    }
    for (let x = 0; x < arr.length; x++) {
        for (let y = 0; y < arr1.length; y++) {
            if (x == y) {
                c = Number(arr[x]) - Number(arr1[y]);
                arr4.push(c);
            }
        }
    }
    console.log(arr4);
    console.log(arr3);
}
mat();

function matele(x) {
    var x = readlineSync.question("Enter the element: ");
    arr.push(x);
}

function matele1(y) {
    var y = readlineSync.question("Enter the element: ");
    arr1.push(y);
}