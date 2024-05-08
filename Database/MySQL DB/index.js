const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");

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



  