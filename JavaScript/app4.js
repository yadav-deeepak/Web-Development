// alert("WORKING");

for(let i=1;i<=5;i++){
     console.log(i);
 }

// for( let i=1;i<=15;i++){
//      if(i%2!=0)
//      console.log(i);
// }
// for( let j=2;j<=10;j++){
//     if(j%2==0)
//     console.log(j);
// }

// for( let j=1;j<=10;j++){
//     console.log(5*j);
// }

// let n = prompt("Enter your number");
// n = parseInt(n);
// for(let k=n;k<=n*10;k=k+n){
//     console.log(k);
// }

// Nested Lopps //
for(let i=1;i<=3;i++){
    console.log(`Outter loop ${i}`);
    for(let j=1;j<=3;j++){
      console.log(j);
    }
 }


 // While Loop //
 let a=1;
 while(a<=5){
    console.log(a);
    a++;
 } 

 let favMovie="Avatar";
 let guess = prompt(" Guess my favorite movie");

 while((guess!=favMovie) && (guess!="quit")){
    guess = prompt("Wrong answer, guess again");
 }
if(guess ==favMovie){
    console.log("Congrats u guessed it right");
}
