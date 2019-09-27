var readlineSync = require('readline-sync');
var x =readlineSync.question("enter two number:");
var y =readlineSync.question("enter two number:");
function sub( x,y)
{
   if (y == 0) {
       console.log(x);
   } else {
       sub(x ^ y, (~x & y) << 1);
   }
}
sub(x,y);