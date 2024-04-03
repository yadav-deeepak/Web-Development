let btns = document.querySelectorAll('button');
console.dir(btns);
// btn.onclick = function (){
//     console.log("Button was clicked");
// };
//WE can also use it like this
function sayHello(){
    alert("Hello!");
}

function sayName(){
    alert("Suraj!");
}

// for(btn of btns){
//     btn.onclick = sayHello;// we don't have to put the ()brackets while calling the function like this adding () means that function will execute as the file is compiled but we want to use it when the button was clicked.
//     btn.onmouseenter = function() {
//         console.log("you entered a button");
//     };
    
// }// This will apply the sayHello() on all the buttons

for(btn of btns){
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
}
