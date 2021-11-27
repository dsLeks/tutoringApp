const express = require('express');
const mysql = require('mysql');
const path = require('path');
const port = 3001;
const app = express();
require('dotenv').config();
const url = require('url'); 

app.use(express.static('public')); //Serving express files 


//app.use(express.static(path.join(__dirname, 'build')));

//app.get('/*', function (req, res) {
//  res.sendFile(path.join(__dirname, 'build', 'index.html'));
//});

//Creating a Connection
var connection = mysql.createConnection({
    host     : process.env.DATABASE_HOST,
    user     : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    port     : process.env.DATABASE_PORT, 
    database : 'sweDB'
}); 

//Connecting to the Database
connection.connect(function(error) {
    if(error) {
        throw error;
    }
    console.log('MySql is Connected')
})

//creating a get route
app.get('/onSubmit', function (req,res) {
    const queryObject = url.parse(req.url,true).query; //Getting Parameters
    console.log(queryObject); //Console Logging the Parameters
    
    const category = queryObject.param1;
    console.log(category);
    const search = queryObject.param2; 
    console.log(search); 
    var sql; 

    if (search.length == 0) {
        sql = `SELECT * FROM tutor INNER JOIN courses ON tutor.tutorID=courses.tutor`; 
    } 

    else if(category == 1) {
        sql = `SELECT * FROM tutor WHERE firstName LIKE "${search}%" OR lastName LIKE "${search}%" OR courseTeaching LIKE "${search}%"`;
    }

    else if(category == 2) {
        sql = `SELECT * FROM courses WHERE courseName LIKE "${search}%"`;
    }

    else {
        sql = `SELECT tutor.tutorID, tutor.email, tutor.firstName, tutor.lastName, tutor.courseTeaching, tutor.imageReference, courses.courseID, courses.courseDescription 
        FROM tutor INNER JOIN courses ON tutor.tutorID=courses.tutor
        WHERE firstName LIKE '${search}%' OR lastName LIKE '${search}%' OR courseTeaching LIKE '${search}%' OR courseDescription LIKE '${search}%'`; 
    }
    
        
    connection.query(sql,(error,results,fields) => {
        if(error) throw error;
        console.log(results);
        res.json(results);
    })
})

//Creating a Listening Port 
app.listen(port, () => {
    console.log("Listening on Port 3001")
})