// alert("Running");
console.log("Working");
console.error("This is an error");//this will genreate an error mssg on console
console.warn("This is a warning");
let rollno =prompt("Enter your Rollno.");
console.log(rollno);


let age=23;
if (age>=18){
    console.log("Eligible  to vote");
    }
else 
    console.log("Not eligible to vote");

let marks=85;
if (marks >=80){
    console.log("A+");
}
else if (marks>70){
    console.log("B+");
}
else if (marks>60){
    console.log("C+");
}
else console.log("D");

let size = 'XL';
if (size==='XL'){
    console.log("Price is 250");
}
else if(size === 'L'){
    console.log('Price is 200');
}
else if(size === 'M'){
    console.log("Price is 150");
}
else console.log("Price is 100");

let score=45;
if(score>=33){
    console.log("You are pass");
    if(score>=80){
        console.log("Grade: O");
    }
    else {
        console.log("Grade: A");
    }
}
else console.log("Better luck next time!");

let a=75;
if ((a> 33 &&a<=80)|| !false){
    console.log("Pass");// Pass
}

let color ="red";
switch(color){
    case "red" :
        console.log("Stop");
        break;
    case "yellow" :
        console.log("Go slow");
        break;
    case "green" :
        console.log("Go");
        break;
    default : console.log("Light is broken");
}
