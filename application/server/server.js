const express = require('express');
const mysql = require('mysql');
const path = require('path');
const port = 3001;
const app = express();
require('dotenv').config();



//Creating a Connection
var connection = mysql.createConnection({
    host     : process.env.DATABASE_HOST,
    user     : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    port     : process.env.DATABASE_PORT
}); 

//Connecting to the Database
connection.connect(function(error) {
    if(error) {
        throw error;
    }
    console.log('MySql is Connected')
})

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//Creating a Listening Port 
app.listen(port, () => {
    console.log("Listening on Port 3001")
})