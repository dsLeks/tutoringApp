const express = require('express')
const mysql = require('mysql')
const path = require('path');
const port = 3001
const app = express();



//Creating a Connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'boltDog4$'
}); 

//Connecting to the Database
connection.connect(function(error) {
    if(error) {
        throw error;
    }
    console.log('MySql is Connected')
})

//Taking incomming Traffic
app.get('/', function (req, res) {
  console.log("The Backend is Up and Running");
});

//Creating a Listening Port 
app.listen(port, () => {
    console.log("Listening on Port 3001")
})