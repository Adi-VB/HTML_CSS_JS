var readlineSync = require('readline-sync');

var N = readlineSync.question("No of lines: ")

floyd = (n) => {
   x = 1, y = 0;
   do {
       a = [];
       do {
           a.push(x);
           x++;
       } while (a.length <= y);
       console.log(a.join(" "));
       y++;
   } while (y < n);
}
floyd(N);