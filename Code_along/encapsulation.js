//Encapsulation
// mechanisms of restricting direct access to some of the object's conponents
class Employee{
    setempDetails(name, id,phoneNo){
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
    }
    getempName(){
        return this.name
    }
    getempid(){
        return this.id
    }
    getempphoneNo(){
        return this.phoneNo
    }
}

let emp1 = new Employee();
emp1.setempDetails('john',1234,456374);
console.log(emp1.getempName())



//Inheritance
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

//Abstraction
// function Employee(name,age,basesalary) {
//     this.name = name;
//     this.age = age;
//     this.basesalary = basesalary;
//     this.monthlybonus = 1000;

//     this.finalsalary = function () {
//         let finalsalary = this.basesalary + this.monthlybonus
//         console.log('Final Salary: '+finalsalary)
//     }

//     this.empDetails = function () {
//         console.log('Name: '+this.name + ' | Age: '+this.age)
//     }
// }
// let emp1 = new Employee('John', 30, 2000);
// emp1.empDetails();
// emp1.finalsalary();
//let monthlybonus, let finalsalary, add to empDetails->> console.log

//polymorphism
// class Animal{

//     constructor(name){
//         this.name = name
//     }
//     eats(){
//         console.log(this.name+' eats food')
//     }
// }
// class Alligator extends Animal{

//     eats(){
//         console.log(this.name+' eats fishes');
//     }
// }

// let Mohith = new Animal('Mohith')
// Mohith.eats();
// let Alli = new Alligator('Alli')
// Alli.eats();