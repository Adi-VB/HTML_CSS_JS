// function three(num) {
//     var a, b, c, i;
//     var num = [a,b,c];
//     var readlineSync = require('readline-sync');
//     var num = readlineSync.question("enter the numbers a,b,c: ")
//     do {
//         switch (num) {
//             case (num.valueof(0) >= num.valueof(1) && num.valueof(1)>=num.value0f(2)):
//                 console.log("A is the greatest no");          
//                 break;
//             case (num.valueof(0) <= num.valueof(1) && num.valueof(1)<=num.value0f(2)):
//                 console.log("C is the greatest no");
//                 break;
//             case (num.valueof(1) >= num.valueof(0) && num.valueof(1)>=num.value0f(2)):
//                 console.log("B is the Greatest no")
//             default:
//                 console.log("all the numbers entered are equal")
//                 break;
//         }
//     } while (i<num.length);
// }
// three();

// function three() {
//     var a, b, c;
//     var num = [a, b, c];
//     var readlineSync = require('readline-sync');
//     var a = readlineSync.question("enter the 1st no: ");
//     var b = readlineSync.question("enter the 2nd no: ");
//     var c = readlineSync.question("enter the 3rd no: ");
//     switch (num = [a,b,c]) {
//         case (a >= b && b >= c):
//             console.log("A is the greatest no");
//             break;
//         case (a <= b && b <= c):
//             console.log("C is the greatest no");
//             break;
//         case (b >= a && b >= c):
//             console.log("B is the Greatest no");
//             break;
//         default:
//             console.log("all the numbers entered are equal")
//             break;
//     }
// }
// three();


// function three(num) {
//     var num = [a, b, c];
//     var readlineSync = require('readline-sync');
//     var a =readlineSync.question("enter the 1st no: ");
//     var b =readlineSync.question("enter the 2nd no: ");
//     var c =readlineSync.question("enter the 3rd no: ");
//     switch (num) {
//         case (num.valueOf(a) >= num.valueOf(b) && num.valueOf(b) >= num.valueOf(c)):
//             console.log("A is the greatest no");
//             break;
//         case (num.valueOf(a) <= num.valueOf(b) && num.valueOf(b) <= num.valueOf(c)):
//             console.log("C is the greatest no");
//             break;
//         case (num.valueOf(b) >= num.valueOf(a) && num.valueOf(b) >= num.valueOf(c)):
//             console.log("B is the Greatest no")
//             break;
//         default:
//             console.log("all the numbers entered are equal")
//             break;
//     }
// }
// three();

function three(num) {
    var num = [a, b, c];
    var readlineSync = require('readline-sync');
    var a =readlineSync.question("enter the 1st no: ");
    var b =readlineSync.question("enter the 2nd no: ");
    var c =readlineSync.question("enter the 3rd no: ");
    switch (num) {
        case (num[0] > num[1] && num[1] > num[2]):
            console.log("A is the greatest no");
            break;
        case (num[0] < num[1] && num[1] < num[2]):
            console.log("C is the greatest no");
            break;
        case (num[1] > num[0] && num[1] > num[2]):
            console.log("B is the Greatest no")
            break;
        default:
            console.log("all the numbers entered are equal")
            break;
    }
}
three();

// function three2(num) {
//     var num = [a, b, c];
//         var i, a, b, c;
//         var readlineSync = require('readline-sync');
//         var a =readlineSync.question("enter the 1st no: ");
//         var b =readlineSync.question("enter the 2nd no: ");
//         var c =readlineSync.question("enter the 3rd no: ");
//         do {
//             console.log("A is the Greatest")
//         } while (a>=b && b>=c);
//         do {
//             console.log("C is the Greatest");
//         } while (a<=b && b<=c);
//         do {
//             console.log("B is the Greatest")
//         } while (b>=a && b>=c);
// }
// three2();