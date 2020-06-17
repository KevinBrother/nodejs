// https://www.expressjs.com.cn/en/resources/middleware/body-parser.html
let express = require('express')
var bodyParser = require('body-parser')
let app = express()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/public/', express.static('./public/'))

// app.engine('html', require('express-art-template'))


app.get('/post', function (req, res) {
    console.log("----------------get query-------------", req.query);
    console.log("----------------get body-------------", req.body);
    // res.send('get 过来啦', req.query)
})

app.post('/post', function (req, res) {
    console.log("----------------post query-------------", req.query);
    console.log("----------------post body-------------", req.body);
    // res.send('post 过来来', req.body)
})


app.listen(3000, function () {
    console.info('app.js is running at http://localhost:3000')
})
