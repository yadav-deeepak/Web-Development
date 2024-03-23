alert("Working");

const student = {
    name: "Suraj",
    age: 20,
    eng: 95,
    math: 99,
    physics: 84,
    getAvg(){
        let avg = (this.eng + this.math + this.physics) / 3;
        console.log(avg);
    }
}

console.log(student.getAvg());

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