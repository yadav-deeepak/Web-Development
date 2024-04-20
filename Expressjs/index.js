const express = require("express");
const app = express(); //Here when express() is executed then it will return some value that will be stored in the app object. app is an object.
// app will help us in creating the server side of the app.

console.dir(app);

let port = 3000;

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
}); //listen() listens to the incoming requests.

// app.use((req,res)=>{
//     console.log("New incoming request");
//     res.send('<h1>Response Is Working</h1>');
// }); //sends response to the requests.
// When we send object as a response it will get converted into the json format.
//app.use method is used to listen to all the requests .

// app.get("/",(req,res)=>{
//     res.send("Hello I am root path what do u want");
// });

// app.get("/apple",(req,res)=>{
//     res.send("You contacted apple path");
// });

// app.get("/orange",(req,res)=>{
//     res.send("You contacted orange path");
// });

// app.get("*",(req,res)=>{
//     res.send("This path doesn't exist");
// });//when all of the path doesn't match then this path will be executed.

app.get("/",(req,res)=>{
    res.send("Hi I'm root");
});// similarly we can send a post request also.

app.get("/:username/:id",(req,res) => {
    let { username , id } = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}</h1>`;
    res.send(htmlStr); 
});// so when we send req on this route with username as parameter then we will get "hello welcome to root " as a response and we will get the response parameter also we get username printed in our console.

app.get("/search",(req,res) => {
    let { q } = req.query;
    if(!q){
        res.send("<h1>Nothing searched</h1>");
    }
    res.send(`search results for query: ${q}`);
});
//here if the value of query is null of if nothing will be searched then it will print nothing searched.