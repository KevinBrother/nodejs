let body = require('./body')
let head = require('./head')

console.log('cat');

exports.create = function (name) {
    return {
        name: name,
        head: head.create(),
        body: body.create()
    };
};

// 在组成一个包的所有子模块中，需要有一个入口模块，入口模块的导出对象被作为包的导出对象。
// 1. 默认是index.js
// 2. 也可以配置包中的package.json指定


