// console.log("Hello JavaScript!");
// console.log("Hello Suraj!");
let a=10;
let b=4;
console.log("Sum is: ", a+b);
let pencilPrice = 10;
let eraserPrice = 5;
// console.log("Total price is : ", pencilPrice+eraserPrice, "Rupees");

console.log(`Total price is: ${pencilPrice+eraserPrice} Rupees.`);//Template literals

// Arithmetic Operators
let x = 10;
let y = 5;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);

//Unary operators
console.log(x++); //10 but value of a will b increased  11
console.log(--y); //5

//comparison operator
let age=18;
console.log(age>18);//false
console.log(age<18);//false
console.log(age>=18);//true
console.log(age==18);//true
console.log(age!=18);//false


let num = 5; //number 
let str ='5'; // string
console.log(num == str);


// Conditional Statement
console.log("Before if statement");
let umra =23;
if(umra>=18){
    console.log("You are eligible to vote");
}
console.log("After if statement");