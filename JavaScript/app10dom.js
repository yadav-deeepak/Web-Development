// let btns = document.querySelectorAll('button');
// console.dir(btns);
// // btn.onclick = function (){
// //     console.log("Button was clicked");
// // };
// //WE can also use it like this
// function sayHello(){
//     alert("Hello!");
// }

// function sayName(){
//     alert("Suraj!");
// }

// // for(btn of btns){
// //     btn.onclick = sayHello;// we don't have to put the ()brackets while calling the function like this adding () means that function will execute as the file is compiled but we want to use it when the button was clicked.
// //     btn.onmouseenter = function() {
// //         console.log("you entered a button");
// //     };
    
// // }// This will apply the sayHello() on all the buttons

// for(btn of btns){
//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName);
// }

let btn= document.querySelector("button");

btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3");
    let randomColor =getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("#box");
    div.style.backgroundColor = randomColor;

    console.log("color generated");
});

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red}, ${blue}, ${green})`;
    return color;
}

let p = document.querySelector("p");

p.addEventListener("click", function(){
    console.log("Paragraph was clicked");
});

let box1 = document.querySelector("#box1");

box1.addEventListener("mouseenter", function(){
    console.log("Mouse inside box");
});
//We can apply event listener on each and every element on the webpage.

 let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", function(){
//     console.log(this);
//     this.style.backgroundColor="blue";
// });

// Suppose we want to add a event that when we click on element then the bgcolor of the element changes to blue.
// Way 1 we can select each element seperately and add style to it.
//Eg: This is not a good way
let h1 = document.querySelector("h1");
let h3 = document.querySelector(".head3");
let para1 = document.querySelector(".para1");

// h1.addEventListener("click", function(){
//     console.log(this);
//     this.style.backgroundColor="blue";
// });

// h3.addEventListener("click", function(){
//     console.log(this);
//     this.style.backgroundColor="blue";
// });

// para1.addEventListener("click", function(){
//     console.log(this);
//     this.style.backgroundColor="blue";
// });

// Another way: This is a better way as it reduces the no. of lines in a code. Redundancy less code
function changeColor(){
    console.log(this);
    this.style.backgroundColor="blue";
}
btn1.addEventListener("click",changeColor);
 h1.addEventListener("click",changeColor);
 h3.addEventListener("click",changeColor);
 para1.addEventListener("click",changeColor);

let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", function(event){
    console.log(event);
    console.log("Button clicked!");
});

// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(){
//     console.log("Key was pressed");
// });// Whenever we press a key this event listener will listen to it and perform the function.

let inp = document.querySelector("input");
inp.addEventListener("keyup",function(event){
    console.log(event.key);
    console.log(event.code);
    console.log("Key was released");
});