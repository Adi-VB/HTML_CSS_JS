function fbfb() {
    var readlineSync = require('readline-sync');
    var a = readlineSync.question("enter a number: ");
    if (a % 1 == 0) {
        if (a%3==0 && a%5==0) {
            console.log("FIZZBUZZ");
         }else if (a%3==0) {
             console.log("FIZZ");
         } else if (a%5==0){
             console.log("BUZZ");
         }else{
             console.log(a);
         }
    } else {
        console.log("put a valid decimal number")
    }
    fbfb1();
}
fbfb();

function fbfb1() {
    var readlineSync = require('readline-sync');
    var s = readlineSync.question("Do you want to continue y/n :");
    switch (s) {
        case (s = "y"):
            fbfb();   
            break;
        case (s = "n"):
            console.log("Thank you !!!");
            break;
        default:
            console.log("Enter a valid option");
            fbfb1();
            break;
    }
}