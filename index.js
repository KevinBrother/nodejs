// 1. 导入其他js模块
// var module1 = require('./require/require1')

// 2. 导入json文件
var json = require('./package.json')
// console.log(json);

// 3. 输出
// console.log("hellow world");
// console.log(module1); // 此时显示 {} ？？？

// 4. 导入 exports导出的对象  ！！exports得到的是exports1模块的exports对象！！
var exports1 = require('./exports/exports1')
// console.log(exports1.getExport());  // 为什么会有undefined

// 4. 导入 moduleExports 导出的模块信息 替换当前模块的导出对象
var moduleExports1 = require('./moduleExports/moduleExports1')
// console.log(moduleExports1());  // 为什么会有undefined

// 5. 导入 包
var cat = require('./catPackage')
var baseModule = require('./baseModule')
console.log(cat);





