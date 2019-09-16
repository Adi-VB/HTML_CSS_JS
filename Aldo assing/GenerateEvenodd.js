var readlineSync = require('readline-sync');

function EAO(N) {
    var E = [];
    var O = [];
    var E1 = [];
    var O1 = [];
    var N = readlineSync.question("Enter the number: ");
    for (let i = 1; i < N; i++) {
        if (i % 1 == 0) {
            if (i % 2 == 0) {
                E.push(i);
            } else {
                O.push(i);
            }
        } else {
            console.log("Input a number: ");
            EAO();
        }
    }
    console.log(E);
    console.log(O);

    function EAO1(M) {
        var M = N * 2;
        for (let j = 1; j <= M; j++) {
            if (j % 2 == 0) {
                E1.push(j)
            } else {
                O1.push(j);
            }
        }
    }
    EAO1();
    console.log(E1);
    console.log(O1);
}
EAO();