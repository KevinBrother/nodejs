'use strict';
let fs = require('fs')

function readFile() {
  fs.readFile('../index.js', 'utf-8', function (err, data) {

    if (err) {
      console.log('错啦！！！', err);
    } else {
      console.log(data);
    }
  })
}

function redImg() {
  fs.readFile('../img/悬封.jpg', function (err, data) {
    if (err) {
      console.log('错啦！！！', err);
    } else {
      // console.log(data);
      // 读取二进制文件时，不传入文件编码时，回调函数的data参数将返回一个Buffer对象。
      console.log(data.length + 'bytes'); // Buffer
      var text = data.toString('utf-8');
      console.log(text);
    }
  })
}

function readFileSync() {
  try {
    let data = fs.readFileSync('../index1.js', 'utf-8');
    console.log(data);
  } catch (err) {
    // 出错了
    console.log('错啦！！！', err);
  }
}

function writeFile() {
  let data = `输入成功了吗，如果传入的数据是String，默认按UTF-8编码写入文本文件，
  如果传入的参数是Buffer，则写入的是二进制文件。
  回调函数由于只关心成功与否，因此只需要一个err参数。`
  fs.writeFile('../baseModule/output.txt', data, function (err) {
    if (err) {
      console.log('错啦！！！', err);
    } else {
      console.log('ok.');
    }
  })
}

function writeFileSync() {
  let data = `同步的写，连个成功的返回都没有,
  Node环境执行的JavaScript代码是服务器端代码，
  所以，绝大部分需要在服务器运行期反复执行业务逻辑的代码，必须使用异步代码，
  否则，同步代码在执行时期，服务器将停止响应，因为JavaScript只有一个执行线程。`
  let res = fs.writeFileSync('../baseModule/output.txt', data);
  console.log(res); // undefined
}

function fileStat() {
  fs.stat('./output.txt', function (err, stat) {
    if (err) {
      console.log('错啦！！！', err);
    } else {
      // 是否是文件:
      console.log('isFile', stat.isFile());
      // 是否是目录:
      console.log('isDirectory: ' + stat.isDirectory());
      if (stat.isFile()) {
        // 文件大小:
        console.log('size: ' + stat.size);
        // 创建时间, Date对象:
        console.log('birth time: ' + stat.birthtime);
        // 修改时间, Date对象:
        console.log('modified time: ' + stat.mtime);
      }
    }
  })
}

; (function () {
  // readFile();
  // redImg();
  // readFileSync();
  // writeFile();
  // writeFileSync();
  fileStat();
})()