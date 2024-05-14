const mongoose = require('mongoose');


main().then((res)=>{
    console.log("Connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User",userSchema);

// const user1 = new User({ name: "Adam", email: "adam@yahoo.in", age: 43 });
// const user2 = new User({ name: "Eve", email: "eve@google.com", age: 42 });

// user1.save();
// user2.save().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

User.insertMany([
    { name: "Tony", email: "tony@gmail.com", age: 50 },
    { name: "Peter", email: "peter@gmail.com", age: 47 },
]).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});