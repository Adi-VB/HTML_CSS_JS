var readlineSync = require('readline-sync');

function vowels() {
    var v = readlineSync.question("Enter the character: ");
    if (v % 1 != 0 && v.length == 1) {
        switch (v) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
                console.log("Its a vowel")
                break;

            default:
                console.log("Its a Consonant")
                break;
        }
    } else if (v.length != 1 && v % 1 != 0){
        console.log("The provided value is not a character but string of characters.");
        vowels();
    }
    
    else {
        console.log("You provided a number !!! ");
        vowels();
    }
    var cont = readlineSync.question("Do you wish to continue y/n: ");
    if (cont == "y"){
        vowels();
    }else {
        console.log("Thank you :) ")
    }
}
vowels();