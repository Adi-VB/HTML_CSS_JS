var readlineSync = require("readline-sync");

var N = readlineSync.question("Enter the length of an array: ")

var arr1 = [];

for (let j = 0; j < N; j++) {
    var n = readlineSync.question("Enter the elements: ")
    arr1.push(n)
}
console.log(arr1)

function hcfArr(arr) {
    function hcf(a, b) {
        if (a == 0) {
            return b;
        } else if (b == 0) {
            return a;
        } else if (a > b) {
            return hcf(b, a % b);
        } else {
            return hcf(a, b % a);
        }
    }
    let a = hcf(arr[0], arr[1])
    for (let i = 2; i < arr.length; i++) {
        a = hcf(a, arr[i])
    } console.log("HCF : " + a)
}
hcfArr(arr1);