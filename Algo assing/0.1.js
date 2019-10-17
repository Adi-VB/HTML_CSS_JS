var readlineSync = require('readline-sync');

var M = readlineSync.question("Enter the no of matrices: ")
var N = readlineSync.question("Enter the order of the NxN matrix: ");
var arr = [];
var arr1 = [];
var arr2 = [];
var result = [];
var result1 = [];

for (let k = 0; k < M; k++) {
    arr1 = [];
    for (let i = 0; i < N; i++) {
        arr = [];
        for (let j = 0; j < N; j++) {
            var n = Number(readlineSync.question("Enter the ele: "))
            arr.push(n);
        }
        arr1.push(arr)
    }
    console.log(arr1);
    arr2.push(arr1);
}
console.log(arr2);

let a = addMatrice(arr2[0], arr2[1])
    for (let i = 2; i < arr2.length; i++) {
        a = addMatrice(a, arr2[i])
    }

const addMatrice = () => {

    arr1.map((e, index) => {
        result.push(
            e.map((x, index2) => x + arr1[index][index2])
        )
    })
    console.log('sum ->', result)
}