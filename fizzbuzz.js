function fbfb() {
    var readlineSync = require('readline-sync');
    var a = readlineSync.question("enter a number: ");
    if (a%3==0 && a%5==0) {
       console.log("FIZZBUZZ");
    }else if (a%3==0) {
        console.log("FIZZ");
    } else if (a%5==0){
        console.log("BUZZ");
    }else{
        console.log(a);
    }
    var s = readlineSync.question("Do you want to continue y/n :");
    if (s == "y") {
        console.log(fbfb());
    } else if (s == "n") {
        console.log("thank you !!!!!");
    }
}
fbfb();