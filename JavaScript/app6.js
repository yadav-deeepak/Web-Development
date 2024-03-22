alert("Working");
function hello(){
    console.log('Hello');
}
hello();
hello();
hello();
hello();

function printName(){
    console.log("Deepak Yadav");
}
printName();
printName();

function isAdult(){
    let age =13;
    if(age >= 18){
        console.log("Is adult");
    }
    else{
        console.log("Is not adult");
    }

}

isAdult();

function printInfo(name , age){
    console.log("Hello",name,"age",age);
} 

printInfo("Viper", 21);

function calAvg( a, b ,c){
    let avg = (a+b+c)/3;
    console.log(avg);
}

calAvg(3,5,6);

function tabel(n){
   for(let i=1;i<=10;i++){
    console.log(n,"*",i,"=",n*i);
   }
}

tabel(5);

function printSum(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum = sum+i;
    }
    return sum;
}

let val=printSum(5);
console.log(val);

let str =["Hi","hello","aur","thank","you","chlte hai!"];
function concat(a){
    let result ="";
    for(let i=0;i<str.length;i++){
        result += str[i];
    }
    return result;
}

let joined=concat(str);
console.log(joined);

// let sum =34; // Global variable
// function calSum(a,b){
//     let sum =a+b; // Function scope
//     console.log(sum);
// }
// calSum(4,5);

{
    let a=25; //Block scope 
    console.log(a); // This variable can be accessed only inside this block
}

function outterFunc(){
    let x= 5;// lexical scope
    let y =6;
    console.log(x,y);
    function innerFunc(){
        console.log(x);
    }
    innerFunc();
}
outterFunc();
const sum = function(a,b){
    return a+b;
}
sum(2,4);

function multipleGreet( func,n){
    for(let i=1;i<=n;i++){
        func();
    }
}
let greet = function(){
console.log("Hello");
}
multipleGreet(greet,2);

function oddEvenTest(request){ // Factory function : Fun that creates new function
    if(request == "odd"){
      return function(n){
          console.log(!(n%2==0));
      }
    }
    else if(request == "even"){
      return function(n){
          console.log(n%2==0);
      }
    }
    else{
      console.log("Wrong request");
    }
}
let request ="odd";
let callFunc = oddEvenTest(request);
console.log(callFunc(3));


//Methods
const calculator ={
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
};

console.log(calculator.add(5,5));