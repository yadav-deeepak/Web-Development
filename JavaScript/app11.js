// console.log("working");

// // VISUALIZING CALL STACK
// function one(){
//     return 1;
// }

// function two(){
//     return one()+one();
// }

// function three(){
//     let ans = two()+one();
//     console.log(ans);
// }

// three();
// // first two() is called and then it will call one() one function will return 1 and it will be removed from the call stack then two function wil executed and it will return 2 as output and it will be removed from the stack at last three() will be executed.

// setTimeout(function(){
//     console.log("Apna College");
// },2000);
// console.log("hello ...");

 let h1 = document.querySelector("h1");

 function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("Color Changed");
        },delay);

    });
}

changeColor("red",1000)
.then(()=>{
    console.log("Color changed to red");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("Color changed to orange");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("Color changed to green");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("Color changed to blue");
});


// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000);
//     });
// }); // Here as soon as the color is changed then the nextColorChange will be passed and the next color change will take place. If first the color is not changed to red then it will not change the color to orange as well.
// // Here it means as soon as the color changes to red change it to orange after 1s and after orange change it to green after 1sec.Like this we can do it for many color


// // Here all the color change are dependent on one another and to show there dependency we will use a callback function nextColorChange();

// PROMISES //

// function savetoDB(data, success, failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;

//     if(internetSpeed > 4){
//        success();
//     }else{
//         failure();
//     }

    
// }
// We are adding two callbacks here success and failure.
// If data is saved call success callback else call the failure callback
// savetoDB("Hello Frnds",()=>{
//     console.log("success1 : Data1 saved ");
//     savetoDB("Hello love",()=>{
//         console.log("success2: Data2 saved");
//         savetoDB("Data 3 Incoming",()=>{
//             console.log("Success3: Data3 saved");
//         },()=>{
//             console.log("Failure3: Data3 not saved");
//         });
//     },()=>{
//         console.log("Failure2: Data not saved");
//     });// If data1 is saved successfully then we will save data2 and for that we are again using savetoDB(); with data and success & failure callbacks
// },
// ()=>{
//     console.log("Failure1 : Weak connection, data not saved");
// });
// ABOVE CODE IS KNOWN AS CALLBACK HELL as a beginner it is difficult to understand this code to prevent us from this situation promises are used//

// Creating above code using promises //

// function savetoDB(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed > 4){
//               resolve("Success: Data was saved");
//             }else{
//                reject("Failure: Data was not saved");
//             }
//     });
    
// }
// // Here savetoDB() is returning a Promise which will have success and failure as callbacks

// savetoDB("Hello Love") 
// .then((result)=>{
//     console.log("DaTA 1 SAVED");
//     console.log(result);
//     return savetoDB("Hello master");
// })
// .then((result)=>{
//     console.log("Data 2 saved");
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("Rejected");
//     console.log(error);
// }); // This catch can be used for both data1 and data2 .
