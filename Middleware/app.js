const express = require("express");
const app = express();
const port = 3000;
const ExpressError = require("./ExpressError");

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
// app.use((req,res,next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// });

// Middleware only for random
app.use('/random',(req,res,next)=>{
    console.log("I am only for random");
    next();
});

const checkToken = (req,res,next)=>{
    let{token} = req.query;
    if (token === "giveaccess"){
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED");
};

app.get("/api", checkToken, (req,res)=>{
    res.send("Data");
});

app.get("/",(req,res)=>{
    res.send("Hi I'm root");
});

app.get("/random",(req,res)=>{
    res.send("This is a random page");
});

app.get("/err",(req,res)=>{
    abcd = abcd;
});

app.get("/admin",(req,res) =>{
    throw new ExpressError(403,"Access to admin is Forbidden");
});

app.use((err,req,res,next)=>{
    let {status = 500, message = "Some error occurred"} = err;
    res.status(status).send(message);
});

//404 
// app.use((req,res)=>{
//     res.send("Page not found");
// });

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});