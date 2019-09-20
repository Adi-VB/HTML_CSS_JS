var readlineSync = require('readline-sync');

var arr = [];

function identity(N) {
    var N = readlineSync.question("Enter the Order of the matrix NxN: ")
    console.log("Enter the elements of the matrix: ")
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            matele();
        }
    }
    console.log(arr);
    for (let a = 0; a < arr.length; a++) {
        if (arr[(a * N) + 1] == 1) {
            console.log("The given matrix is an identity matrix: ")
        }else{
            console.log("The given Matrix is not identity matrix!!! ");
        }
    }

}

function matele(x) {
    var x = readlineSync.question("Enter the element: ");
    arr.push(x);
}
identity();