var readlineSync = require('readline-sync');

function q() {
    var s = [];
    var n = readlineSync.question("Enter the length of the array: ");
    switch (n % 1) {
        case (0):
            for (let i = 0; i < n; i++) {
                var e = readlineSync.question("Enter the element: ");
                if (e % 1 == 0) {
                    s.push(Number(e));
                } else {
                    s.push(e);
                }
            }
            console.log("your array is: ");
            console.log(s);
            maxval = s.reduce((acc , val) => acc > val ? acc : val);
            console.log("The max value is : " + maxval);
            break;
        default:
            console.log("Enter a Valid length");
            q();
            break;
    }
}
q();