const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/home.html'))
})

app.listen(port, function() {
    console.log('Examples app listening on Port 3000')
})