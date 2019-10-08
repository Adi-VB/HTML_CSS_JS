var readlineSync = require('readline-sync');
var b = [], bjoin, bnew, b1;
var a = [], ajoin, anew, a1;
function swap() {
    swap1()
    swap2();
    var yon = readlineSync.question("Get your Swapped value y/n: ");
    switch (yon) {
        case ("y"):
            anew = ajoin.replace(ajoin, bjoin);

            console.log("The Elements of your array a = [] now is: ");
            a1 = anew.split("");
            console.log(a1)

            bnew = bjoin.replace(bjoin, ajoin);

            console.log("The Elements of your array b = [] now is: ");
            b1 = bnew.split("");
            console.log(b1);
            break;
        case ("n"):
            console.log("Have a good day!!!");
            break;
    }
}

swap();


function swap1() {
    var n = readlineSync.question("Enter the length of the array a : ");
    switch (n % 1) {
        case (0):
            for (let i = 0; i < n; i++) {
                var e = readlineSync.question("Enter the element: ");
                if (e % 1 == 0) {
                    a.push(Number(e));
                } else {
                    a.push(e);
                }
            }
            console.log("your 1st array is: ");
            console.log(a);
            ajoin = a.join("");
            break;
        default:
            console.log("Enter a Valid length");
            swap1();
            break;
    }
}


function swap2() {
    var m = readlineSync.question("Enter the length of 2nd Array: ");
    switch (m % 1) {
        case (0):
            for (let j = 0; j < m; j++) {
                var e = readlineSync.question("Enter the element: ");
                if (e % 1 == 0) {
                    b.push(Number(e));
                } else {
                    b.push(e);
                }
            }
            console.log("your 2nd array is: ");
            console.log(b);
            bjoin = b.join("");
            break;

        default:
            console.log("Enter a valid length: ");
            swap2();
            break;
    }
}