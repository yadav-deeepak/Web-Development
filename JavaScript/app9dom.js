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
