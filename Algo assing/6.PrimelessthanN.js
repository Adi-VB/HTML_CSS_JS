var readlineSync = require('readline-sync');


    var E = [];
    var  E1 = [];
    var N1 = readlineSync.question("Enter a number: ");
    for (let j = 0; j < N1; j++) {
        if (prime(j)) {
            E.push(j)
        }
    }
    console.log(E)

    for (var j = 0; E1.length < N1; j++) {
        if (prime(j)) {
            E1.push(j);
        }
     }
     console.log(E1)
    

function prime(N) {
    var factors = 0;
    for (i = 2; i <= N; i++) {
        if (N % i == 0) {
            factors++;
        }
    }
    if (factors == 1) {
        return true;;
    } else {
        return false;
    }
}