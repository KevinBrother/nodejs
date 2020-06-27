let express = require('express')
var router = require('./routers')
var bodyParser = require('body-parser')

var app = express()

// 获取post请求参数
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 发放静态资源
app.use('/public/', express.static('./public/')) // http://localhost:3000/public/test.txt
app.use('/outer/', express.static('../'))  // http://localhost:3000/outer/index.js
app.use(express.static('../'))  // http://localhost:3000/index.js

app.engine('html', require('express-art-template'))

app.use(router)

app.listen(3000, function () {
    // nodemon app.js
    console.log(' app is running at http://localhost:3000');
})

var s = {
    name: "张三",
    age: 18,
    gender: "男"
}

