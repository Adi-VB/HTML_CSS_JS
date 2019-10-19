var readlineSync = require("readline-sync");

var N = 5;
var arr = [];
var arr1 = [];
var sum = 0;

for (let i = 0; i < N; i++) {
    var n = readlineSync.question("Enter the Elements: ")
    arr.push(n)
}
console.log(arr);

for (let j = 0; j < arr.length; j++) {
    sum = Number(sum) + Number(arr[j]);
}
console.log(sum);

for (let k = 0; k < arr.length; k++) {
    var a = sum - arr[k]
    arr1.push(a)
    sum = sum;
}
console.log(arr1)
var A = arr1[0];
var B = arr1[0];
for (let l = 0; l < arr1.length; l++) {
    if (arr1[l] < arr1[l+1]) {
        A = arr1[l+1];
    }
    if (arr1[l] > arr1[l+1]) {
        B = arr1[l+1];
    }
}
console.log("Max Number: " + A);
console.log("Min Number: " + B);