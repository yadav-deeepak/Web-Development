const mongoose = require("mongoose");
const {Schema} = mongoose;

main().then((res)=>{
    console.log("Connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String,
        },
    ],
});

const User = mongoose.model("User",userSchema);

const addUsers = async() =>{
    let user1 = new User({
        username: "Sherlockholmes",
        addresses: [{
            location: "221B Baker street",
            city: "London",
        }]
    });

    user1.addresses.push({location: "P32 Wallstreet", city: "London"});
    let result = await user1.save();
    console.log(result);
}

addUsers();



