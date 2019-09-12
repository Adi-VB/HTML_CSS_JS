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
            var yon = readlineSync.question("Get your sum and the mean y/n: ");
            switch (yon) {
                case ("y"):
                    const sum = s.reduce((total, value) => (total) + (value));
                    console.log("The Sum of your Array elements is : " + sum);
                    const mean = sum / n;
                    console.log("and your mean is: " + mean);
                    break;
                case ("n"):
                    console.log("have a nice day!!!");
                    break;
            }
            break;
        default:
            console.log("Enter a Valid length");
            q();
            break;
    }
}
q();