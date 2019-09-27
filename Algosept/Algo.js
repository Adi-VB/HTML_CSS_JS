var readlineSync = require('./node_modules/readline-sync');
var arr2 = [];
var arr = "";
var ascii = require('./Algo1');
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
    tobinary(newarray[j]);
}
function tobinary(num){
    if (num == 1) {
        arr = arr + (num);
        do {
            arr = arr + "0";
        } while (arr.length < 8);
        arr2.push(arr.split("").reverse().join(""));
        arr = "";
        return;
    } else {
       arr = arr + (num % 2);
        tobinary(Math.floor(num / 2));
    }
}
console.log(arr2);