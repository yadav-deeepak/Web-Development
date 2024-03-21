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