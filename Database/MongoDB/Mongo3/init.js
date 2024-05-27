const mongoose = require("mongoose");
const Chat = require("./models/chats.js");

main().then((res)=>{
    console.log("Connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

let allChats = [
    {
        from: "Suraj",
        to: "Deepak",
        msg: "Oye order lelo",
        created_at: new Date(),
    },
    {
        from: "Viper",
        to: "Deepak",
        msg: "Photos bhejde",
        created_at: new Date(),
    },
    {
        from: "Suraj",
        to: "Viper",
        msg: "Chemistry kaha se padhu",
        created_at: new Date(),
    },
    {
        from: "Viper",
        to: "Harsh",
        msg: "Glitchzz",
        created_at: new Date(),
    },
]

Chat.insertMany(allChats);

