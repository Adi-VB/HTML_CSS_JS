var readlineSync = require('readline-sync');

function prime(N) {
    var N = readlineSync.question("Enter your Number: ");
    if (N % 1 != 0){
        console.log("Enter a valid number: ");
        prime();
    }else if (N == 1 || N == 2 || N == 3 || N == 5 || N == 7){
        console.log("The given Number " + N + " is Prime");
    }else if (N%2 == 0 || N % 3 == 0 || N % 5 == 0 || N % 7 == 0){
        console.log("The given number " + N +" is not a prime ");
    }else {
        console.log("The given number "+ N + " is Prime");
    }
}
prime();