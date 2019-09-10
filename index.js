var readlineSync = require('readline-sync');

var first_name = readlineSync.question("Please Enter your name : ");
var last_name = readlineSync.question("Please enter your last name : ");

console.log(first_name + last_name);