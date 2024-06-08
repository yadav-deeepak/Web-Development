const mongoose = require("mongoose");
const {Schema} = mongoose;

main().then((res)=>{
    console.log("Connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
});

const Customer = mongoose.model("Customer",customerSchema);

const addCustomer = async() =>{
    let cust1 = new Customer({
        name: "Viper Ankur",
    });
    let order1 = await Order.find
}

const Order = mongoose.model("Order",orderSchema);

// const addOrders =async () =>{
//     let res = await Order.insertMany([
//         {item: "Samosa", price: 12},
//         {item: "Chips", price: 10},
//         {item: "chocolate", price: 40}
//     ]);
//     console.log(res);
// };

// addOrders();