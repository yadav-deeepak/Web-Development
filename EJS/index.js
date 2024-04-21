const express = require("express");
const app = express();
const path = require("path");

let port = 3000;
app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
})

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    res.render("home.ejs");
});
app.get("/help",(req,res)=>{
    res.send("This is the help page");
});