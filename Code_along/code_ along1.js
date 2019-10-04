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

// function Instructer(fname, lname, age, gender, exp){
//     Bootcamper.call(this, fname, lname, age, gender, exp)
//     this.exp = exp;
// }
// var adi = new Instructer("prash", "teja", 24, "M", 1);
// console.log(adi);

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

// function abc(){
//     console.log(arguments);
// }
// abc(1,2);

// console.log(arguments.length);

//Sync - one step at atime - blocking
//Async - nonblocking

// function one()
// {
//     console.log("One");
// }
// function two() {
//     console.log("Two");
// }
// function three(){
//     console.log("Three");
// }
// one();
// setTimeout(two,2000);
// three();

// var a = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// var b = [];

// for (let i = 0; i < a.length; i++) {
//     if (prime(a[i]) == true) {
//         b.push(a[i])
//     }
// }
// console.log(b)

// function prime(x) {
//     let factor = 0;
//     for (let j = 2; j <= x; j++) {
//         if (x % j == 0) {
//             factor++;
//         }
//     }
//     if (factor == 1) {
//         return true;
//     } else {
//         return false;
//     }
// }

//node fs module