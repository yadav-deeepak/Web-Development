let url = "https://catfact.ninja/fact";
let url2 ="https://dog.ceo/api/breeds/image/random";


// let btn = document.querySelector("button");

// async function getImage(){
//     try{
//         let res = await axios.get(url2);
//         return res.data.message;
//     }
//     catch(e){
//              console.log("Error :", e);
//              return "No Image found";
//          }
// }


// btn.addEventListener("click",async ()=>{
//     let link = await getImage();
//     let img = document.querySelector("#result");
//     img.setAttribute("src",link);
//     console.log(link);
// });
// btn.addEventListener("click",async ()=>{
//     console.log("Button was clicked");
//     let fact = await getFacts();
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });

// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json(); //parsing data into json format
// })
// .then((data)=>{
//     console.log(data.fact);
// })
// .catch((err)=>{
//     console.log("Error :",err);
// });

// async function getFacts(){
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     }
//     catch(e){
//         console.log("Error: ",e);
//     }
// }

// Using Axios
// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }catch(e){
//         console.log("Error :", e);
//         return "No fact found";
//     }
// }

// Sending headers with API request 
let url3 = "https://icanhazdadjoke.com/";


async function getJokes(){
    try{
        const config ={headers: {Accept: "application/json"} };
        let res = await axios.get(url3,config);
        console.log(res.data.joke);
    }catch(e){
        console.log("Error: ", e);
    }
}

let url4 = "http://universities.hipolabs.com/search?name=";

let btn2 = document.querySelector(".btn");

btn2.addEventListener("click",async ()=>{
    let country = document.querySelector("input").value;
    console.log(country);
   
    let colleges = await getCollege(country);
    console.log(colleges);
    show(colleges);
});

function show(colleges){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colleges){
        console.log(col.name);
        
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}


async function getCollege(country){
    try{
        let res = await axios.get(url4 + country);
        return res.data;
    }catch(e){
        console.log("Error: ", e);
    }
}