let fs = require('fs')
let template = require('art-template')
let http = require('http')


// 1、获得模板
// 2、获得文件列表
// 3、替换并输出


let server = http.createServer((req, resp) => {

    // 1、获得模板
    fs.readFile('./index.html', (err, res) => {
        if (err) {
            return console.log('没有改模板文件');

        }
        let htmlStr = res.toString()
        let wwwDir = 'D://vscodewk//nodejs'
        // 2、获得文件列表
        fs.readdir(wwwDir, (err, files) => {
            if (err) {
                return console.log('文件错误', err)
            }
            // console.log(files);

            /*  for (let file of files) {
                 fs.stat(wwwDir + '//' + file, (err, stat) => {
                     if (err) {
                         return console.log('文件错误', err)
                     }
                     console.log(stat.mtime)
                     file.mtime = stat.mtime
                 })
             } */

            // 3、替换并输出
            let ret = template.render(htmlStr, { files })
            resp.end(ret)
        })
    })

})

server.listen(3000, () => {
    console.log('服务器开启成功 http://127.0.0.1:3000/')
})



/*
let htmlStr
fs.readFile('./index.html', (err, res) => {
    if (!err) {
        htmlStr = res.toString()

        console.log(htmlStr);

    }
})

let wwwDir = 'D://vscodewk//nodejs'

fs.readdir(wwwDir, (err, files) => {
    if (err) {
        console.log('文件错误', err);

    }
    console.log(files);
})

let server = http.createServer((req, resp) => {
    resp.end('121')
})

server.listen(3000, (e) => {
    console.log(e, '服务器开启成功 http://127.0.0.1:3000/')
})  */
