var readlineSync = require('readline-sync');

var arr = [];
var arrs = [];

function diff() {
    var N = readlineSync.question("Enter the order of the matrix: ");
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            var e = readlineSync.question("Enter the elemnts of the matrix: ")
            arr.push(e);
        }        
    }
    arrs.push(arr);
    console.log(arrs);
}
diff();
