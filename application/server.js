const express = require("express");
const mysql = require("mysql");
const path = require("path");
const port = 3001;
const app = express();
require("dotenv").config();
const url = require("url");
const cors = require("cors");
const bcrypt = require("bcrypt");

app.use(express.static("public")); //Serving express files

//app.use(express.static(path.join(__dirname, 'build')));

//app.get('/*', function (req, res) {
//  res.sendFile(path.join(__dirname, 'build', 'index.html'));
//});

app.use(express.json());
app.use(cors());

//Creating a Connection
var connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
  database: "sfsuAppDB",
});

//Connecting to the Database
connection.connect(function (error) {
  if (error) {
    throw error;
  }
  console.log("MySql is Connected");
});

//creating a get route
app.get("/onSubmit", function (req, res) {
  const queryObject = url.parse(req.url, true).query; //Getting Parameters
  console.log(queryObject); //Console Logging the Parameters

  const category = queryObject.param1;
  console.log(category);
  const search = queryObject.param2;
  console.log(search);
  var sql;

  if (search.length == 0) {
    sql = `SELECT * FROM tutor INNER JOIN courses ON tutor.tutorID=courses.tutor`;
  } else if (category == 1) {
    sql = `SELECT * FROM tutor WHERE firstName LIKE "${search}%" OR lastName LIKE "${search}%" OR courseTeaching LIKE "${search}%"`;
  } else if (category == 2) {
    sql = `SELECT * FROM courses WHERE courseName LIKE "${search}%"`;
  } else {
    sql = `SELECT tutor.tutorID, tutor.email, tutor.firstName, tutor.lastName, tutor.courseTeaching, tutor.imageReference, courses.courseID, courses.courseDescription 
        FROM tutor INNER JOIN courses ON tutor.tutorID=courses.tutor
        WHERE firstName LIKE '${search}%' OR lastName LIKE '${search}%' OR courseTeaching LIKE '${search}%' OR courseDescription LIKE '${search}%';  `;
  }

  connection.query(sql, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
    res.json(results);
  });
});

//Creating a post route for the Registration
app.post("/registeration", (req, res) => {
  console.log("Got body: ", req.body);
  const data = req.query;
  var sql;
  const saltRounds = 10;

  bcrypt.hash(data.password, saltRounds, (err, hash) => {
    sql = `INSERT INTO user (firstName, lastName, email, password) VALUES ('${data.firstName}', '${data.lastName}', '${data.email}', '${hash}')`;
    connection.query(sql, (error, results, fields) => {
      if (error) console.log("Error in Insert into User /register");
      console.log(results);
    });
  });

  res.json({
    status: "sucess",
  });
});

//Creating a post route for the login verification -- Post is used to ensure security so that the login data is secure
app.post("/login", (req, res) => {
  console.log("Body for Login is: ", req.query);
  const data = req.query;

  sql = `SELECT password FROM user WHERE email = '${data.email}'`;
  connection.query(sql, (error, results, fields) => {
    if (error) console.log("Error in Select query /login");
    console.log(results);

    if (results.length < 1) {
      res.json({
        status: "User does not exist",
      });
    } else {
      bcrypt.compare(data.password, results[0].password, (err, result) => {
        console.log(results[0].password);
        if (result == true) {
          sql = `SELECT * FROM user WHERE password = '${results[0].password}'`;
          connection.query(sql, (error, results, fields) => {
            if (results) {
              res.json({
                data: results,
              });
            } else {
              res.json({
                status: "User has been Authenticated!",
                loggedIn: true,
              });
            }
          });

          //  else {
          //   res.json({
          //     status: "User Does Not Exist! Password or Username does not exist!",
          //   });
        }
      });
    }
  });
});
//Creating a Listening Port
app.listen(port, () => {
  console.log("Listening on Port 3001");
});
