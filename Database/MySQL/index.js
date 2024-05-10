const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

const port = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Deepak@32',
  });

  let getRandomUser = () => {
    return [
       faker.string.uuid(),
       faker.internet.userName(),
       faker.internet.email(),
       faker.internet.password(),
    ];
  };// This function is returning the random user object.

// let q = "INSERT INTO user (id,username,email,password) VALUES ?";
// let data = [];
// for(let i=1; i<=100; i++){
//    data.push(getRandomUser()); //100 fake user data
// }

// HOME ROUTE
app.get("/",(req,res) => {
  let q =`SELECT count(*) FROM user`;
  try{
      connection.query(q,(err,result)=>{
          if(err) throw err;
          let count = result[0]["count(*)"];
          res.render("home.ejs",{ count });
      })
  }
  catch(err){
       console.log(err);
       res.send("Some error in database");
  }
});

// SHOW ROUTE
app.get("/user",(req,res) => {
  let q = `SELECT * FROM user`;
  try{
     connection.query(q,(err,users) =>{
        if(err) throw err;
        res.render("users.ejs", { users });
     });

  }catch(err){
     res.send("Some error has occurred");
  }
});

// EDIT ROUTE
app.get("/user/:id/edit",(req,res) =>{
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try{
    connection.query(q,(err,result) =>{
       if(err) throw err;
       let user = result[0];
       res.render("edit.ejs",{ user });
    });

 }catch(err){
    res.send("Some error has occurred");
 }
})

// UPDATE ROUTE
app.patch("/user/:id",(req,res) =>{
  let { id } = req.params;
  let {password: formPass, username: newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try{
    connection.query(q,(err,result) =>{
       if(err) throw err;
       let user = result[0];
       if(formPass != user.password){
        res.send("Wrong Password");
       }else{
        let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
        connection.query(q2,(err,result) =>{
          if(err) throw err;
          res.redirect("/user");
        })
       }
       
    });

 }catch(err){
    res.send("Some error has occurred");
 }
})

app.listen(port,() => {
  console.log(`Listening on port ${port}`);
});

  //try{
  //     connection.query(q,[data],(err,result)=>{
  //         if(err) throw err;
  //         console.log(result);
  //     })
  // }
  // catch(err){
  //      console.log(err);
  // }
  
  // connection.end(); // This will close the connection automatically.



  