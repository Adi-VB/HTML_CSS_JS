// var readlineSync = require('readline-sync');

// var N = readlineSync.question("Enter the order of the NxN matrix: ");

var M1 = [[2,3,4],[4,5,5],[3,2,1]]
var M2 = [[1,2,2],[7,8,5],[9,7,4]]
var arr = [];
function add_sub() {
    if (M1[0].length == M2[0].length && M1.length == M2.length) {
        console.log("Addition and subtractions are possible")
        add();
    }else{
        console.log("Add and sub are not possible")
    }
}
add_sub();

function add() {
    for (let i = 0; i < M1.length; i++) {
        for (let j = 0; j < M1[i].length; j++) {
            var M = M1[i][j] + M2[i][j]
            arr.push(M)
        }
    }
    console.log(arr)
}