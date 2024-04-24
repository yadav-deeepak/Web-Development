const express = require("express");
const app = express();
let port = 3000;

app.get("/register",(req,res)=>{
    let {user , password} = req.query;
    res.send(`Standard get response .Welcome ${user}`);
});

app.post("/register",(req,res)=>{
    res.send("Standard Post response");
});

app.listen(port,() =>{
    console.log(`listening to port ${port}`);
});