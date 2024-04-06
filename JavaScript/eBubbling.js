let div = document.querySelector("#box");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click",function(){
    console.log("div was clicked");
});

ul.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("ul was clicked");
});

for (li of lis){
    li.addEventListener("click", function(event){
        event.stopPropagation();
        console.log("li was clicked");
    });
}
// When we click on div we get div was clicked 
// When we click on ul we get div was clicked and ul was clicked.
// When we click on li we get li was clicked ul was clicked div was clicked.
// When we click on an element it triggers its event its parents and upper level events as well this phenomenon is called as evnet bubbling .