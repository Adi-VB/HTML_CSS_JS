var readlineSync = require("readline-sync");

var arr = [];
var sum = 0;

function arm() {
    var n = readlineSync.question("Enter the number: ")
    var a = n.toString()
    var b = a.split("")
    console.log(b);
    if (n % 1 == 0) {
        for (let i = 0; i < b.length; i++) {
            var c = b[i] ** b.length;
            arr.push(c);
        }
        console.log(arr);
        for (let j = 0; j < arr.length; j++) {
            sum = Number(sum) + Number(arr[j]);
        }
        console.log(sum);

        if (Number(sum) == Number(n)) {
            console.log("Armstrong number")
        } else {
            console.log("Not an Armstrong number")
        }
    } else {
        console.log("Enter a valid Number!!")
        arm()
    }
}
arm();