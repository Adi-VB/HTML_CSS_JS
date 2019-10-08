var readlineSync = require('readline-sync');

var N = Number(readlineSync.question("Enter the Number: "));
var R = Number(readlineSync.question("Enter the value of r: "));
var a = 1;
var x = N - R;
var n, r, y, nCr, nPr;

function combination() {
    n = fact(N);
    a = 1;
    r = fact(R);
    a = 1;
    y = fact(x);
    nCr = Number(n) / (Number(r) * Number(y))
    console.log("No of Combinations is: " + nCr)
    nPr = Number(n) / Number(y);
    console.log("No of Permutations is: " + nPr)
}
combination();

function fact(z) {
    for (let i = 0; i < z; i++) {
        var b = i + 1;
        var c = a * b;
        a = c;
    }
    return c;
}