var readlineSync = require('readline-sync');

var r;
var s;

function right() {
    var i = readlineSync.question("Enter the value: ");
    if (i % 1 == 0) {
        r = (6 >> i);
        s = (6 / (2 ** i));
    }
    console.log(r);
    console.log(Math.floor(s));
}
right();