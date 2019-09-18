var readlineSync = require('readline-sync');

var arr = [];
var sum = 0;
function median() {
    var N = readlineSync.question("Enter the length of array: ");
    for (let n = 0; n < N; n++) {
        ele(n);
    }
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        sum = Number(sum) + Number(arr[i]);
    }
    console.log("your mean is: " + Number(sum / arr.length))
}

function ele(n) {
    var n = readlineSync.question("Enter element: ");
    if (n % 1 == 0) {
        arr.push(n);
    } else if (n % 1 != 0){
        console.log("Enter a number as an element: ");
        ele();
    }
}
median();