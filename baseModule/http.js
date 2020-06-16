'use strict'

/**
 * @description: 创建http服务
 */
function createServer() {

    // 1. 导入http模块
    const http = require('http')

    // 2. 创建http server, 并传入回调函数
    let server = http.createServer((req, resp) => {
        // 回调函数接收request和response对象,
        // 获得HTTP请求的method和url:
        console.log(req.method + ':' + req.url);
        // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
        // resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.setHeader('Content-Type', 'text/html;charset=utf-8')
        // 将HTTP响应的HTML内容写入response:
        resp.end('<h1>Hello 世界</h1>');

    })

    server.listen(9999);
    console.log('server is runing at http://127.0.0.1:9999/');
}


/**
 * @description: 解析url
 */
function parsetUrl() {
    const url = require('url');

    console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));
}

/**
 * @description: 处理本地文件目录 
 */
function path() {
    const path = require('path');
    // console.log(path);

    const workDir = path.resolve('.');
    let filePath = path.join(workDir, 'pub', 'index.html');
    console.log(filePath);
}

function fileServer() {
    let fs = require('fs'),
        url = require('url'),
        path = require('path'),
        http = require('http');

    // console.log(process);

    let root = path.resolve(process.argv[2] || '.');

    console.info('---------------static root dir:---------------' + root);


    let server = http.createServer((request, resp) => {

        let pathname = url.parse(request.url).pathname;
        console.info('-------------------pathname-----------------' + url.parse(request.url).pathname);

        let filePath = path.join(root, pathname);
        // 如果遇到请求的路径是目录，则自动在目录下依次搜索index.html、default.html，如果找到了，就返回HTML文件的内容。
        fs.stat(filePath, (err, stats) => {
            if (!err) {
                console.log('----------200--------------', request.url);
                if (stats.isDirectory) {
                    console.log(1);
                    fs.stat(filePath + '/index.html', (err, stats) => {
                        console.log(2);
                        if (!err) {
                            console.log(3);
                            filePath += 'index.html'
                            console.info('-----------inside filePath----------------' + filePath);
                            resp.writeHead(200);
                            fs.createReadStream(filePath).pipe(resp)
                        } else {
                            fs.stat(filePath + 'default.html', (err, stats) => {
                                console.log(4);
                                if (!err) {
                                    console.log(5);
                                    filePath += 'default.html'
                                    console.info('-----------inside filePath----------------' + filePath);
                                    resp.writeHead(200);
                                    fs.createReadStream(filePath).pipe(resp)
                                } else {
                                    console.log('错啦！！！', err);
                                }
                            })
                        }
                    })
                } else {
                    resp.writeHead(200);
                    fs.createReadStream(filePath).pipe(resp);
                }
            } else {
                console.info('-----------404----------------' + request.url);
                resp.writeHead(404);
                resp.end('404 Not Found');
            }

        })
    })

    server.listen(9999);
    console.log('server is runing at http://127.0.0.1:9999/');

    /*   else {
          fs.stat(filePath + 'default.html', (err, stats) => {
              console.log(4);
              if (!err) {
                  console.log(5);
                  filePath += 'default.html'
              }
          })
      } */
}

; (function () {
    createServer();
    // parsetUrl();
    // path();
    // fileServer();  // 方法接收参数不行
})()