var readlineSync = require('readline-sync');
var divd = readlineSync.question("enter divident:");
var div = readlineSync.question("enter divisor:");
function mod(){
   var r = divd-Math.floor(divd/div)* div;
   console.log(r);
}
mod();