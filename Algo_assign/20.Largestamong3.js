var readlineSync = require('readline-sync');

var arr = [];

function three() {
    var n = 3;
    var m;
    for (let i = 0; i < n; i++) {
        var a = Number(readlineSync.question("enter the elements: "));
        array(a);
    }
    console.log(arr);
    m = arr[0];
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] < arr[j+1]) {
            m = arr[j+1];
        }
    }
    console.log(m);
}
three();

function array(a) {
    arr.push(a)
}

// function three() {
//     var a = Number(readlineSync.question("enter the 1st no: "));
//     var b = Number(readlineSync.question("enter the 2nd no: "));
//     var c = Number(readlineSync.question("enter the 3rd no: "));
//     if (a % 1 == 0 && b % 1 == 0 && c % 1 == 0) {
//         if (a > b && b > c) {
//             console.log("A: " + a);
//         } else if (a < b && b < c) {
//             console.log("C: " + c);
//         } else if (b > a && b > c) {
//             console.log("B: " + b);
//         } else if (a == b && a == c) {
//             console.log("The no's are equal");
//         }
//     } else {
//         console.log("Please enter valid number's");
//         three();
//     }
//     three1();
// }
// three();

// function three1() {
//     var s = readlineSync.question("Do you whish to continue y/n : ");
//     switch (s) {
//         case (s = "y"):
//             three();
//             break;
//         case (s = "n"):
//             console.log("thank you !!!!");
//             break;
//         default:
//             console.log("Enter a Valid Responce:");
//             three1();
//             break;
//     }
// }