var express = require('express')

var app = express()

app.use("/", express.static(__dirname + '/build'))


const PORT = process.env.PORT || 8080

app.listen(PORT, (req, res) => {
    console.log('Server Started..')
})