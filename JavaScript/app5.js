// alert("WORKING");
let student = {
    name: 'Viper',
    age: 23,
    marks: 9.9,
    city: "Delhi"
};

student.city="Mumbai";
student.gender;
student.gender = "Male";
console.log(student);
delete student.marks;
console.log(student);

const item ={
   price: 100.99,
   discount: 50,
   colors: ["red","pink"]
};

// Thread / Twitter post
// Create an object literal for the properties of 
//thread/twitter post which includes
//username,content,likes,repost,tags
const post ={
    username: "mugiwaraCoder",
    content: "This is my first post.",
    likes: 50,
    reposts: 2,
    tags: ["@heysuraj","viper_ankur69"]
};
 console.log(post.content);

// OBJECT OF OBJECT //
const classInfo = {
    aman : {
        grade: "A",
        city: "Delhi"
    },
    viper : {
        grade: "A+",
        city: "Banglore"
    },
    Suraj : {
        grade: "A",
        city: "Mumbai"
    }

};
console.log(classInfo);
console.log(classInfo.viper.city);
classInfo.viper.city = "Gurgaon";
console.log(classInfo.viper); 


// ARRAY OF OBJECT //
const inform = [{name: "viper",age: 21,city: "Delhi"},{name: "suraj",age: 20,city: "Lucknow"},{name: "harsh",age: 21,city: "Noida"}];
console.log(inform[0]);
console.log(inform);
console.log(inform[1].name);