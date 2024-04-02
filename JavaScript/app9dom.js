let imgObj = document.getElementById("mainImg");
   console.log(imgObj);
 
let smallImages = document.getElementsByClassName("oldImg");
for(let i=0;i<smallImages.length;i++){
   smallImages[i].src = "/JavaScript/assets/spiderman_img.png"; //changes the value of src of all the smallImages as "/JavaScript/assets/spiderman_img.png"
   console.log(`value of image n0. ${i} is changed`);
}

console.dir(document.querySelector("h1"));

 let heading = document.querySelector('h1');
 heading.innerHTML = `<u>${heading.innerText}</u>`;

// let img = document.querySelector('img');
// console.log(img.getAttribute('id'));

// img.setAttribute('id', 'spidermanImg');//This will set the vallue of id as spidermanImg for the img
// console.log(img.getAttribute('id'));// This will get the value of id for img. 

console.log(heading.style);

let links = document.querySelectorAll(".box a");
// for(let i=0;i<links.length;i++){
//    links[i].style.color ="green";
// }

// ANOTHER WAY //
for(link of links){
   link.style.color = "purple"; //Inline style
}

let box = document.querySelector('.box');
console.log(box.classList);
box.classList.add("yellowBg");
console.log(box.classList);

let h4 = document.querySelector('h4');
console.log(h4.parentElement);

let ul = document.querySelector('ul');
console.log(ul.children);
console.log(ul.children[2].previousElementSibling);

// let newP = document.createElement('p');
// newP.innerText = "Hi this is new paragraph.";
// newP.append("this is new text");
 let body =document.querySelector('body');
//  body.appendChild(newP);

let btn = document.createElement('button');
btn.innerHTML = "New button";
let p = document.querySelector('p');
console.log(btn);
console.log(p);
p.insertAdjacentElement('beforebegin', btn); //This will add the button before the paragraph starts.
 p.insertAdjacentElement('afterbegin', btn); //This will add the element after the paragraph starts.At the start in the paragraph
 p.insertAdjacentElement('beforeend', btn); //This will add the element before the paragraph end at the end in the paragraph
 p.insertAdjacentElement('afterend', btn); //This will add the element after the paragraph ends.

// p.remove();

let redP =  document.createElement('p');
redP.innerHTML = "Hey I'm red!!";
redP.style.color = 'red';
body.append(redP);

let blueh3 = document.createElement('h3');
blueh3.innerHTML= "I'm a blue H3";
blueh3.style.color = 'blue';
body.append(blueh3);

let newDiv = document.createElement('div');
newDiv.classList.add('divbox');
body.append(newDiv);

let h1 = document.createElement('h1');
h1.innerHTML= "I'm in a div";
newDiv.append(h1);

let para1= document.createElement('p');
para1.innerHTML = "ME TOO!";
newDiv.append(para1);

