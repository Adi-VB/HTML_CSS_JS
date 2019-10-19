var readlineSync = require('readline-sync');

const pi = Math.PI;

var r = readlineSync.question("Enter the value of radius: ");

if (Math.floor(r % 1) == 0) {
    Cir = 2*pi*r;
    Area = pi*r*r;
    
    console.log("The area is: "+ Area);
    console.log("The Circumference is: "+ Cir);
}else{
    console.log("Enter a valid number")
}

