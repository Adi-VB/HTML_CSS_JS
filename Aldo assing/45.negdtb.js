var readlineSync = require('readline-sync');

var arr = "";
var s;
function dtb() {
    var num = readlineSync.question("Enter a number: ")
    if (num % 1 == 0) {
        dtb1(num);
        console.log(s)
    }else{
        console.log("Enter a valid number: ");
        dtb();
    }
    
}
dtb();

function dtb1(num) {
    if (num == 1) {
        arr = arr + (num);
        do {
            arr = arr + "0";
        } while (arr.length < 8);
        s = arr.split("").reverse().join("");
        return;
    } else {
        arr = arr + (num % 2);
        dtb1(Math.floor(num / 2));
    } 
}
