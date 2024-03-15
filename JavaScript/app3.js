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

// ARRAY METHODS //
let cars =["audi","bmw","xuv","maruti"];
console.log(cars); //['audi', 'bmw', 'xuv', 'maruti']
cars.push("toyota");
cars.push("ferrari");
console.log(cars);//['audi', 'bmw', 'xuv', 'maruti', 'toyota', 'ferrari']
cars.pop();
console.log(cars);// ['audi', 'bmw', 'xuv', 'maruti', 'toyota']
cars.unshift("ferrari");
console.log(cars);//['ferrari', 'audi', 'bmw', 'xuv', 'maruti', 'toyota']
cars.shift();
console.log(cars);//['audi', 'bmw', 'xuv', 'maruti', 'toyota']

let primary =['red','yellow','blue'];
console.log(primary.indexOf('yellow'));
console.log(primary.indexOf('green'));
console.log(primary.includes('yellow'));
console.log(primary.includes('green'));
let secondary =["orange","green","violet"];
console.log(primary.concat(secondary));
console.log(primary.reverse());

let color = ["red","yellow","blue","orange","pink","white"];
console.log(color.slice());
console.log(color.slice(2));
console.log(color.slice(2,3));
console.log(color.slice(-2));

console.log(color.splice(4));
console.log(color);
console.log(color.splice(0,1));
console.log(color);
console.log(color.splice(0,1,"black","grey"));
console.log(color);

// ARRAY REFREENCES //
let arr1 = ['a','b'];
let arrCopy = arr1;
arrCopy.push('c');
console.log(arr1); //['a','b','c']
console.log(arr1==arrCopy); //true

// Nested Arrays //
let nums =[[2,4],[3,6],[4,8]];
console.log(nums); //(3) [Array(2), Array(2), Array(2)]
console.log(nums.length);//3