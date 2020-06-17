// http://aui.github.io/art-template/express/
let express = require('express')
let app = express()

app.engine('html', require('express-art-template'))

// 默认访问views目录中的文件,下面是设置其他默认访问目录
// app.set('views', "./public/");

app.get('/', function (req, res) {
    res.render('render.html', {
        user: {
            name: 'aui',
            tags: ['art', 'template', 'nodejs']
        }
    })
})

app.listen(3000, function () {
    console.info('app.js is running at http://localhost:3000')
})
