var readlineSync = require('readline-sync');

// var M = readlineSync.question("Enter the no of matrices: ")
var N = readlineSync.question("Enter the order of the NxN matrix: ");
var arr = [];
var arr1 = [];


for (let i = 0; i < N; i++) {
    arr = [];
    for (let j = 0; j < N; j++) {
        var n = Number(readlineSync.question("Enter the ele: "))
        arr.push(n);
    }
    arr1.push(arr)
}
console.log(arr1);