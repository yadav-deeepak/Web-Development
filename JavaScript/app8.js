let arr = [1,2,3,4,5];
let print = function (el){
        console.log(el);
      }
 arr.forEach(print);

 arr.forEach((el) => {
    console.log(el);
 })

 let arr1 = [{
    name: "Viper",
    marks: 95
 },
 {
    name: "Suraj",
    marks: 98
 },
{
    name: "Sid",
    marks: 93
}];

arr1.forEach((student) => {
    console.log(student.name);
});
let gpa =arr1.map((el) =>{
     return el.marks/10;
});
console.log(gpa);

let num =[1,2,3,4];
      let double = num.map(function(el){
        return el*2;
      });

let nums = [2,4,1,5,6,2,7,8,9];
let even = nums.filter( (nums) =>(nums % 2 == 0) );
console.log(nums);
console.log(even);

let val = [1,2,3,4].every( (el) => (el%2==0) ); //false
let val1 = [2,4].every( (el) => (el%2==0) ); //true
console.log(val,val1);

let ans =[1,2,3,4].reduce( (res,el) => (res+el) ); 
console.log(ans);

//Using reduce method find the max in an array 
let nums1 = [2,3,4,5,3,4,7,8,1,2];
let result = nums1.reduce( (max,el) => {
   if (el>max){
      return el;
   }
   else{
      return max;
   }
});
console.log(result);