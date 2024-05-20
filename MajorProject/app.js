const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const Listing = require("./models/listing.js");
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.urlencoded({ extended: true }));

main().then((res)=>{
    console.log("Connected to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}


app.get("/",(req,res)=>{
    res.send("Hi I'm working");
});

// INDEX ROUTE
app.get("/listings",async (req,res)=>{
   let allListings = await Listing.find({});
   res.render("listings/index.ejs",{allListings});
});

// NEW ROUTE
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
});

// SHOW ROUTE
app.get("/listings/:id",async (req,res)=>{
   let{id} = req.params;
   const listing = await Listing.findById(id);
   res.render("listings/show.ejs",{listing});
});

// CREATE ROUTE
app.post("/listings",async (req,res)=>{
//    let {title, description, image, price, country, location} = req.body;
   let newListing = new Listing(req.body.listing);
   await newListing.save();
   res.redirect("/listings");
});


// app.get("/testListing",async (req,res)=>{
//     let sampleListing = new Listing({
//         title: "My new villa",
//         description: "By the beach",
//         price: 1200,
//         location: "Calangute Goa",
//         country: "India"
//     });
//     await sampleListing.save();
//     console.log("Sample was saved");
//     res.send("Successful testing");
// });

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});