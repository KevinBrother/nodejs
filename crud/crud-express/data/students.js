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
            return callback(err)
        }
        callback(null, JSON.parse(data).students)
    })
}

/**
 * @description: 添加学生
 */
exports.add = function (student, callback) {
    fs.readFile(url, (err, data) => {
        if (err) {
            return callback(err)
        }
        let students = JSON.parse(data).students;
        student.id = students.length + 1
        students.push(student)
        let fileData = JSON.stringify({
            students
        })

        fs.writeFile(url, fileData, (err) => {
            if (err) {
                return callback(err)
            }
            // 成功就没错，所以错误对象是null
            callback(null)
        })

    })
}

/**
 * @description: 删除某个学生
 */
exports.delete = function (id, callback) {
    fs.readFile(url, (err, data) => {
        if (err) {
            callback(err)
        }

        let students = JSON.parse(data).students;
        let idx = students.findIndex(item => item.id == id)
        if (idx === -1) {
            return callback(`没有该用户id ${id}`)
        }
        students.splice(idx, 1)
        let fileData = JSON.stringify({
            students
        })

        fs.writeFile(url, fileData, (err) => {
            if (err) {
                return callback(err)
            }
            // 成功就没错，所以错误对象是null
            callback(null)
        })
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



