var readlineSync = require('readline-sync');

function arrsum(a) {
    var s = [];
    var n = readlineSync.question("Enter an Element: ")
    for (i=0 ; i<s.length; i++){
        s[i] = s.push(n);
        console.log(s)
    }
}
arrsum();