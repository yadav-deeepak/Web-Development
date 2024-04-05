let form =document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    
//     let inp = document.querySelector("input");
//     console.dir(inp.value);
 });//here the prevent default method will stop the page going to the action page as soon as the submit button is clicked.We will remain on the same page.

let user = document.querySelector("#user");

user.addEventListener("change", function(){
    console.log("Change Event");
    console.log("Final value :",user.value);
}); // change tracks the changes between final and initial stage.

user.addEventListener("input", function(){
    console.log("Input event");
    console.log("Final value :",user.value);
}); //input event tracks the small changes as we enter letter it will track the changes.

let textEdit = document.querySelector("#textEdit");
let p = document.querySelector("p");

textEdit.addEventListener("input", function(){
    console.log(textEdit.value);
    p.innerText = textEdit.value;
})