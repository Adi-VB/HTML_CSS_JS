var readlineSync = require('readline-sync');

var ascii = {
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    O: 79,
    ' ': 32

}
var mystring = readlineSync.question("Enter your string: ");
var myarray = mystring.split("");
var newarray = [];
for (let i = 0; i < myarray.length; i++) {
    for (var x in ascii) {
        if (myarray[i] == x) {
            var value_array = ascii[x];
            newarray.push(value_array);
        }
    }
}
console.log("your ASCII equivalent is: ");
console.log(newarray);

for (let j = 0; j < newarray.length; j++) {
    binary(newarray[j]);
}


function binary(num) {
    if (num == 0) {
        return 1;
    } else {
        n = Math.floor(num % 2);
        console.log(n);  
        binary(num / 2);
    }
}

