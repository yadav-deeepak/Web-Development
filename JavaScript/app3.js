alert("Working");

//Trim()
let msg = "   Hello   ";
console.log(msg.trim());// 'Hello'
console.log(msg); //"   Hello   "

let naam="viper";
console.log(naam.toUpperCase());

let naam1="SURAJ";
console.log(naam1.toLowerCase());

let str ="ILoveCoding";
console.log(str.indexOf("Love")); //1
console.log(str.indexOf("j")); // -1 (not found)
console.log(str.indexOf("o")) // 2(only 1 index)

console.log(str.slice(5)); // "Coding"
console.log(str.slice(1,5)); //"Love"


console.log(str.replace("Love","do")); //"IdoCoding"

let st= "Mango";
console.log(st.repeat(4));

//Method chaining//
let mssg = "   hello   ";
console.log(mssg.toUpperCase().trim());

// ARRAYS //
let students =["viper" , "suraj" ,"deepak"];

// ARRAYS ARE MUTABLE //
let fruits =["MANGO" , "APPLE" , "LITCHI"];
fruits[0] = "banana";
console.log(fruits);