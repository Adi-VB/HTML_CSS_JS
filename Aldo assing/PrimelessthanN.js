var readlineSync = require('readline-sync');

function PLTN() {
    var E = [];
    var O = [];
    var N1 = readlineSync.question("Enter a number: ");
    if (N1 % 1 == 0) {
        for (let N = 0; N < N1; N++) {
            if (prime(N)) {
                E.push(N);
            }
        }
    } else if (N1 % 1 != 0) {
        console.log("Enter a valid number");
        PLTN();
    }
    console.log(E);

    function N1prime() {
        for (let N = 0; O.length < N1; N++) {
            if (prime(N)) {
                O.push(N);
            } 
        }
    }
    N1prime();
    console.log(O);
}
PLTN();

function prime(N) {
    if (N <= 1) {
        return false;
    } else if ( N == 2 || N == 3 || N == 5 || N == 7) {
        return true;
    } else if (N % 2 == 0 || N % 3 == 0 || N % 5 == 0 || N % 7 == 0) {
        return false;
    } else {
        return true;
    }
}