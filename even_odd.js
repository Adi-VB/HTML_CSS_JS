function even_odd() {
    var readlineSync = require('readline-sync');
    var num = readlineSync.question("Enter a number : ");
    if (num <= 0) {
        console.log("The number is not positive, enter a positive number!!");
    } else if (num % 2 == 0) {
        console.log("the number you entered is even.");
    } else if(num % 2 == 1){
        console.log("The given number is odd!!!");
    }else{
        console.log("Invalid input!!!!")
    }
    even_odd2();
}
even_odd();

function even_odd2(num) {
    var readlineSync = require('readline-sync');
    var num = readlineSync.question("do you want to continue y/n: ");
    switch (num) {
        case (num = "y"):
            even_odd();
            break;
        case  (num = "n"):
            console.log("Thank you!!!!");
            break;
        default:
            console.log("Enter a valid option")
            even_odd2();
            break;
    }
}