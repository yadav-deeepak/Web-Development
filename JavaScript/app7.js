alert("Working");

// const student = {
//     name: "Suraj",
//     age: 20,
//     eng: 95,
//     math: 99,
//     physics: 84,
//     getAvg(){
//         let avg = (this.eng + this.math + this.physics) / 3;
//         console.log(avg);
//     }
// }

// console.log(student.getAvg());

function getAvg(){
    console.log(this);
 }

 getAvg();

 console.log("Hello");
 console.log("Hello");
 try {
    console.log(a);
 }
 catch{
    console.log("An error has occurred!");
 }
 console.log("Hello2");
 console.log("Hello2");

 const sum = (a,b)=>{
     console.log(a+b);
 };

 const mul = (a,b) => (a*b);
 console.log(mul(2,3));

 console.log("hi there!");
// setTimeout( ()=>{
//     console.log("Apna college");
// },4000);
// console.log("Welcome to");

setInterval( () => {
    console.log("Apna Desh");
},2000);

const student = {
    name: "aman", //global scope 
    marks: 95,
    prop: this,
    getName: function () {
        return this.name;
    },
    getMarks: () => { //parent's scope -> window obj
        console.log(this);
        return this.marks; //undefined
    },
    getInfo1: function () {
        setTimeout( () => {
            console.log(this);// student obj
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function() {
            console.log(this);// window object
        }, 2000);
    },
};

// console.log(student.getMarks());

const square = (n) => n*n;
console.log(square(4));

// Write a function that prints "Hello world" 5 times at intervals of 2s each.
let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(()=> {
    clearInterval(id);
},10000);