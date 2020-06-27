var express = require('express')
var fs = require('fs')
var Students = require('./data/students')
// 1. 创建路由容器
var router = express.Router()

// 2. 把路由挂载到router路由容器上

/**
 * @description: 返回首页内容
 */
router.get('/', function (req, res) {
    let b = 1
    console.log(b);

    // res.send('wa wu通过express的router进来了')
    res.render('index.html', {
        user: {
            name: 'aui',
            tags: ['art', 'template', 'nodejs']
        }
    })
})

/**
 * @description: 登录
 */
router.post('/login', function (req, res) {
    // req.body
    if (req.body.password !== '123123') {
        res.send('密码错误，请重新输入！<a href="/">去登录</a>')
    } else {
        res.redirect('/students')
    }
})

/**
 * @description: 返回学生列表
 */
router.get('/students', function (req, res) {
    Students.find((err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Server err')
        }

        res.render('students.html', {
            students: data
        })
    })
})

/**
 * @description: 添加学生
 */
router.post('/students/add', (req, res) => {
    console.log('-----------body-----------', req.body);

    Students.add(req.body, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Server err')
        }
        res.redirect('/students')
    })
})

/**
 * @description: 删除某个学生
 */
router.get('/students/delete', (req, res) => {
    let id = parseInt(req.query.id)

    Students.delete(id, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send(`Server err ${err}`)
        }
        res.redirect('/students')
    })
})

/**
 * @description: 更新某个学生信息
 */
router.post('/students/update', (req, res) => {
    Students.add((err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Server err')
        }
        res.render('students.html', {
            students: data
        })
    })
})

/**
 * @description: 查找某个学生
 */
router.get('/students/findById', (req, res) => {
    let id = parseInt(req.query.id)

    Students.add((err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Server err')
        }
        res.render('students.html', {
            students: data
        })
    })
})




// 3. 把router导出去
module.exports = router