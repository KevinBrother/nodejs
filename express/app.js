let express = require('express')

var app = express()

app.use('/public', express.static('./public/')) // http://localhost:3000/public/test.txt
app.use('/outer', express.static('../'))  // http://localhost:3000/outer/index.js

app.get('/', function (req, res) {
    res.send('Hello world')
})

app.listen(3000, function () {
    console.log(' app is running at http://localhost:3000');
})