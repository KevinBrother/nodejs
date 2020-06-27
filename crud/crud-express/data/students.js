// const 
let fs = require('fs')
let path = require('path')

/**
 * @description: 查找学生列表
 */
exports.find = function (callback) {
    readStudents(callback, students => {
        callback(null, students)
    })
}

/**
 * @description: 添加学生
 */
exports.add = function (student, callback) {
    readStudents(callback, students => {
        student.id = students.length + 1
        students.push(student)

        writeStudents(callback, students)
    })
}

/**
 * @description: 删除某个学生
 */
exports.delete = function (id, callback) {

    readStudents(callback, students => {
        let idx = students.findIndex(item => item.id === id)
        if (idx === -1) {
            return callback(`没有该用户id ${id}`)
        }
        students.splice(idx, 1)

        writeStudents(callback, students)
    })
}

/**
 * @description: 更新某个学生信息
 */
exports.update = function (student, callback) {
    readStudents(callback, students => {

        let idx = students.findIndex(item => item.id === student.id)
        if (idx === -1) {
            return callback(`没有该用户id ${student.id}`)
        }
        students[idx] = student

        writeStudents(callback, students)

    })
}

/**
 * @description: 查找某个学生
 */
exports.findById = function (id, callback) {
    readStudents(callback, students => {

        let student = students.find(item => item.id === id)
        if (!student) {
            return callback(`没有该用户id ${id}`)
        }

        callback(null, student)
    })
}


/**
 * @description: 
 * @param {Function} callback 回调函数 
 * @param {Function} success 读取学生文件成功的回调
 * @return: 
 */

const url = path.join(__dirname, 'students.json')

function readStudents(callback, success) {
    fs.readFile(url, (err, data) => {
        if (err) {
            callback(err)
        }
        success(JSON.parse(data).students)
    })
}

/**
 * @description: 把学生对象写入文件
 * @param {Function} callback 回调函数 
 * @param {Array} students 学生对象数组
 * @return: 
 */
function writeStudents(callback, students) {
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
}



