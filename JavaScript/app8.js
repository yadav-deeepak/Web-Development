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