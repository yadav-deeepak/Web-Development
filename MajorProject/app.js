const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

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

//EDIT ROUTE 
app.get("/listings/:id/edit",async (req, res)=>{
    let{id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
});

//UPDATE ROUTE
app.put("/listings/:id",async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
});

//DELETE ROUTE 
app.delete("/listings/:id", async (req,res)=> {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
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