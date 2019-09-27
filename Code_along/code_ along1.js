// OOPS in JS of 2 types:
// 1) Function prototypes
// 2) CLasses

// function Bootcamper(fname, lname, city, age){
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//     this.city = city;
// }

// const Khalil = new Bootcamper("Khalil", "Ali", "Bherain", 25);
// console.log(Khalil)

// function Bootcamper(fname, lname, age, gender){
//     this.name = {
//         fname,
//         lname
//     }
//     this .age = age;
//     this.gender = gender;
// }

// var adi = new Bootcamper("Aditya", "Ballurkar", 44, "M");
// console.log(adi);

// Bootcamper.prototype.greeting = function(){
//     console.log ('Hi! I\'m ' + this.name.fname + '.');
// }

// class Bootcamper {
//     constructor(fname, lname, age, gender) {
//         this.name = {
//             fname,
//             lname
//         }
//         this.age = age;
//         this.gender = gender;
//     }
//     greeting(){
//         console.log('Hi! I am ' + this.name.fname+'.');
//     }
//     abc(q,y){
//         return q+y;
//     }
// }

// class Instructor extends Bootcamper {
//     constructor(fname, lname, age, gender,exp,loc){
//         super(fname, lname, age, gender);
//         this.exp = exp;
//         this.loc = loc;
//     }
// }

// var adi = new Instructor("Aditya", "Ballurkar",22,"M","exp","loc");
// console.log(adi);
// adi.greeting();
// console.log(adi.abc(10,10));

//function expression
// iife = immediate invoked function express