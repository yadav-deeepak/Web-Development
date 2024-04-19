const express = require("express");
const app = express(); //Here when express() is executed then it will return some value that will be stored in the app object. app is an object.
// app will help us in creating the server side of the app.

console.dir(app);

let port = 3000;

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
}); //listen() listens to the incoming requests.

app.use((req,res)=>{
    console.log("New incoming request");
    res.send('<h1>Response Is Working</h1>');
}); //sends response to the requests.
// When we send object as a response it will get converted into the json format.