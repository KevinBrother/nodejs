let express = require('express')

var app = express()

// 发放静态资源
app.use('/public/', express.static('./public/')) // http://localhost:3000/public/test.txt
app.use('/outer/', express.static('../'))  // http://localhost:3000/outer/index.js
app.use(express.static('../'))  // http://localhost:3000/index.js


app.get('/', function (req, res) {
    res.send('Hello world')
})

app.get('/nodemon', function (req, res) {
    res.send('执行nodemon app.js 就可以自动执行了！')
})


app.listen(3000, function () {
    console.log(' app is running at http://localhost:3000');
})