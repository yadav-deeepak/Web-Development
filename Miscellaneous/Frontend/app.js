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

function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function () {
    console.log(`Hi , my name is ${this.name}`);
};

let p1 = new Person("adam",25);
let p2 = new Person("eve",24);