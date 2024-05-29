const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");

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
app.get("/listings",wrapAsync(async (req,res)=>{
   let allListings = await Listing.find({});
   res.render("listings/index.ejs",{allListings});
}));

// NEW ROUTE
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
});

// SHOW ROUTE
app.get("/listings/:id",wrapAsync(async (req,res)=>{
   let{id} = req.params;
   const listing = await Listing.findById(id);
   res.render("listings/show.ejs",{listing});
}));

// CREATE ROUTE
app.post("/listings",wrapAsync(async (req,res,next)=>{       
        if(!req.body.listing){
            throw new ExpressError(400,"Send valid data for listing");
        }
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");    
}));

//EDIT ROUTE 
app.get("/listings/:id/edit",wrapAsync(async (req, res)=>{
    let{id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}));

//UPDATE ROUTE
app.put("/listings/:id",wrapAsync(async (req,res)=>{
    if(!req.body.listing){
        throw new ExpressError(400,"Send valid data for listing");
    }
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
}));

//DELETE ROUTE 
app.delete("/listings/:id", wrapAsync(async (req,res)=> {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}));


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

app.all("*",(req, res, next) =>{
    next(new ExpressError(404,"Page not found!"));
});

app.use((err, req, res, next)=>{
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("listings/error.ejs",{message});
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});