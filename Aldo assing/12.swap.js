var readlineSync = require('readline-sync');

function swap() {
    swap1()
    swap2();
    var yon = readlineSync.question("Get your Swapped value y/n: ");
    switch (yon) {
        case ("y"):
            anew = ajoin.replace(ajoin, bjoin);

            console.log("The Elements of your array a = [] now is: ");
            a = anew.split("");
            for (var i = 0; i < a.length; i++) {
                k = a[i];
                if (k % 1 == 0) {
                    a[i] = +a[i];
                    return a;
                } else {
                    return a;
                }
            }
            console.log(a)
            bnew = bjoin.replace(bjoin, ajoin);

            console.log("The Elements of your array b = [] now is: ");
            b = bnew.split("");
            for (var j = 0; j < b.length; j++) {
                l = b[j];
                if (l % 1 == 0) {
                    b[j] = +b[j];
                    return b;
                } else {
                    return b;
                }
            }
            console.log(b);
            break;
        case ("n"):
            console.log("Have a good day!!!");
            break;
    }
}

swap();

function swap1() {
    var a = [];
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
    var b = [];
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