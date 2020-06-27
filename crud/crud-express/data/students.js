// const 
let fs = require('fs')
let path = require('path')

/* fs.readFile('./data/students.json', (err, data) => {
    if (err) {
        return res.status(500).send('Server err')
    }
    let students = JSON.parse(data).students

    res.render('students.html', {
        students
    })
}) */


const url = path.join(__dirname, 'students.json')

/**
 * @description: 查找学生列表
 */
exports.find = function (callback) {
    fs.readFile(url, (err, data) => {
        if (err) {
            callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}

/**
 * @description: 添加学生
 */
exports.add = function (student, callback) {
    fs.writeFile(url, student, (err) => {
        if (err) {
            callback(err)
        }
    })
}

/**
 * @description: 删除某个学生
 */
exports.delete = function (callback) {
    fs.readFile(url, (err, data) => {
        if (err) {
            callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}

/**
 * @description: 更新某个学生信息
 */
exports.update = function (callback) {
    fs.readFile(url, (err, data) => {
        if (err) {
            callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}

/**
 * @description: 查找某个学生
 */
exports.find = function (callback) {
    fs.readFile(url, (err, data) => {
        if (err) {
            callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}



