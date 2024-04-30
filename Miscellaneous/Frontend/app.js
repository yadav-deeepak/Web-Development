const stu1 = {
    name: "suraj",
    age: 20, 
    marks: 99,
};

const stu2 = {
    name: "Deepak",
    age: 22, 
    marks: 82,
};

let arr =[1,2,3];
arr.sayHello = () => {console.log("Hello I'm arr");};

// FACTORY FUNCTION //

// function personMaker(name,age){
//     const person={
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi my name is ${this.name}`);
//         }
//     };
//     return person;
// }

//  ANOTHER WAY USING CONSTRUCTOR  //

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function () {
//     console.log(`Hi , my name is ${this.name}`);
// };


//using class 

class Person {
    constructor (name , age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor (name,age,marks){
        super(name,age); // When we use super constructor then that means that we are calling the parent class constructor.
        this.marks = marks;
    }
    greet(){
        return "Hello!";
    }
 }

 let s1 = new Student("adam",25,95);


let p1 = new Person("adam",25);
let p2 = new Person("eve",24);