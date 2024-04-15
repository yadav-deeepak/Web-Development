// let n =5;

// for(let i=0;i<n;i++){
//     console.log("Hello",i);
// }



let args = process.argv; // Using this we will get all the arguments that are passed as argument while using node script.js Deepak Viper Suraj here 'Deepak Viper Suraj' these are arguments 
for(let i=2;i< args.length;i++){
   console.log("Hello and welcome",args[i]);
}