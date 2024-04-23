const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

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

app.get("/rolldice",(req,res)=>{
    let num = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{ diceVal: num });
});

app.get("/ig/:username",(req,res)=>{
    let  { username } = req.params;
    const instaData = require("./data.json");
    console.log(instaData);
    const data = instaData[username];
    if(data){
        res.render("insta.ejs",{ data }); 
    }
    else{
        res.render("error.ejs");
    }
    console.log(data);
});