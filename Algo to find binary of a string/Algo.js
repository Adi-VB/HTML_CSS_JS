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
console.log("your ASCII equivalent of array is: ");
console.log(newarray);
var arr = [];
for (let j = 0; j < newarray.length; j++) {
    var str = binary(newarray[j]);
    var strrev = str.split("").reverse();
    for (k = 0; k < strrev.length; k++) {
        if (strrev.length < 8){
            strrev.push(0);
        }
    }
    var newstr = strrev.reverse().join("");
    arr.push(newstr);
    arr.join("");
}
console.log("The binary of the string is : " + arr);


function binary(num) {
    var B = parseInt(num, 10);
    return B.toString(2);
}
