console.log("Working");

// async function greet(){
//     throw "Weak connection";
//     return "hello!";
// }

// greet()
// .then((result)=>{
//     console.log("Promise was resolved");
//     console.log("Result was: ",result);
// })
// .catch((err)=>{
//     console.log("Promise was rejected: ", err);
// });

// Creating arrow function as async function 
// let demo = async () => {
//     return 5;
// };

// demo(); // Returns a promise with PromiseState as fulfilled.

// Await 

function getNum(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function demo(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
} // when we dont use await keyword then all the numbers will printed at a single time 
// using await keyword it will wait till the first getNum() is resolved or rejected then the next getNum() will execute.

let h1 = document.querySelector("h1");

function changeColor(color,delay){
   return new Promise((resolve,reject)=>{
       setTimeout(()=>{
            let num = Math.floor(Math.random()*5)+1;
            if(num > 3){
             reject("Promise rejected");
            }
           h1.style.color = color;
           console.log(`color changed to ${color}!`);
           resolve("Color Changed");
       },delay);

   });
}

async function demo(){

    try{
        await changeColor("red",1000);
        await changeColor("orange",1000);
        await changeColor("green",1000);
        await changeColor("blue",1000);
    }
    catch(err){
        console.log("Error caught");
        console.log(err);
    }
    

    let a=5;
    console.log(a);
    console.log("New number: ",a + 3);
}
// If promise gets rejected then the work that is not dependent on promise will also not be done 
// demo();

let jsonRes = '{"fact":"When a domestic cat goes after mice, about 1 pounce in 3 results in a catch.","length":76}';

console.log(jsonRes);

// to convert this data into valid format

let validRes = JSON.parse(jsonRes); // Converts the data from string format to JS object format.
console.log(validRes); 
console.log(validRes.fact); 

let student ={
    name: "Viper",
    marks: 99,
}; //To convert it in JSON format 

let jsonFormat = JSON.stringify(student);
console.log(jsonFormat);
