'use strict'
let fs = require('fs');

function readStream() {
  let rs = fs.createReadStream('output.txt', 'utf-8');

  rs.on('data', function (chunk) {
    console.log("data:");
    console.log(chunk);
  })

  rs.on('end', function () {
    console.log("end");
  })

  rs.on('error', function (err) {
    console.log("error!!!:", err);
  })
}

function writeStreamByString() {
  let ws1 = fs.createWriteStream('output1.txt', 'utf-8');
  ws1.write('使用Stream写入文本数据。。。\n');
  ws1.write('end');
  ws1.end();

  ws1.on('end', function () {
    console.log("createWriteStream over");
  })
}

function writeStreamByBuffer() {
  let ws1 = fs.createWriteStream('output2.txt');
  ws1.on('end', function () {
    console.log("writeStreamByBuffer over");
  })
  ws1.write(new Buffer.from('使用Stream写入二进制数据。。。\n', 'utf-8'));
  ws1.write(new Buffer.from('end', 'utf-8'));
  ws1.end();
}

function rs2ws() {
  let rs = fs.createReadStream('output1.txt');
  let ws = fs.createWriteStream('output2.txt')
  rs.pipe(ws);

  rs.on('end', function () {
    console.log("end");
  })
}

; (function () {
  readStream();
  // writeStreamByString();
  // writeStreamByBuffer();
})()