const express = require('express');
const mysql = require('mysql');
const path = require('path');
const port = 3001;
const app = express();
require('dotenv').config();
const url = require('url'); 

app.use(express.static('public')); //Serving express files 


app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

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
    const search = queryObject.param2; 
    var sql; 


    if(category == 'tutors') {
        sql = `SELECT * FROM tutor WHERE firstName LIKE "${search}%"`;
    }

    else if(category == 'Courses') {
        sql = `SELECT * FROM tutor WHERE courseTeaching LIKE "${search}%"`;
    }

    else {
        sql = `SELECT * FROM tutor WHERE firstName LIKE "${search}%" OR courseTeaching LIKE "${search}%"`; 
    }
    
        
    connection.query(sql,(error,results,fields) => {
        if(error) throw error;
        const result = JSON.stringify(results)
        console.log(result);
        res.send(result);
    })
})

//Creating a Listening Port 
app.listen(port, () => {
    console.log("Listening on Port 3001")
})