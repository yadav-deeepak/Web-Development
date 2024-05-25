const express = require("express");
const app = express();
const port = 3000;

//middleware -> response send

// app.use((req,res,next)=>{
//     console.log("Hi , I'm 1st middleware");
//     next();
// });

// app.use((req,res,next)=>{
//     console.log("Hi , I'm 2nd middleware");
//     next();
// });

//Logger 
app.use((req,res,next)=>{
    req.time = new Date(Date.now()).toString();
    console.log(req.method,req.hostname,req.path,req.time);
    next();
});

app.get("/",(req,res)=>{
    res.send("Hi I'm root");
});

app.get("/random",(req,res)=>{
    res.send("This is a random page");
});

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});