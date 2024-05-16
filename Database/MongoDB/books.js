const mongoose = require('mongoose');

// Connecting with MongoDB And creating amazon DB 
main().then((res)=>{
    console.log("Connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

// Creating the Schema
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: 1,
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction","non-fiction"],
    }
});

// Creating Model
const Book = mongoose.model("Book",bookSchema);

// Inserting Data 
// let book1 = new Book({
//     title: "Marvel Comics",
//     price: 600,
//     category: "fiction",
// });

// Saving the data into the DB
// book1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// Updating 
Book.findByIdAndUpdate("66461d962e472bc264a8cfa0",{price: -500}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});
