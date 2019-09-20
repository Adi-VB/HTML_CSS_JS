var readlineSync = require('readline-sync');

var arr = [];
var arr2 = [];
var arr3 = [];

function count() {
    var N = readlineSync.question("Enter the Order of the matrix NxN: ")
    console.log("Enter the elements of the matrix: ")
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            matele();
        }
    }
    console.log(arr);
    for (let x = 0; x < arr.length; x++) {
        if (arr[x] % 2 == 0){
            arr2.push(arr[x]);
        }else{
            arr3.push(arr[x]);
        }
    }
    console.log("The frequency of even is " + arr2.length);
    console.log("The frequency of odd is " + arr3.length);
}

function matele(x) {
    var x = readlineSync.question("Enter the element: ");
    arr.push(x);
}

count();