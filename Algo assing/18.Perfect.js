var readlineSync = require("readline-sync");

var arr = [];
var sum = 0;

function perfect() {
    var n = readlineSync.question("Enter the number: ")
    if (n % 1 == 0) {
        for (let i = 0; i < n; i++) {
            if (n % i == 0) {
                arr.push(i);
            }
        }
        console.log(arr)
        for (let j = 0; j < arr.length; j++) {
            sum = Number(sum) + Number(arr[j]);
        }
        console.log(sum);
        if (sum == n) {
            console.log("It is Perfect Number")
        }else {
            console.log("Not a Perfect Number")
        }
    }else{
        console.log("Enter a valid Number: ")
        perfect()
    }
}
perfect();