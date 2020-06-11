# 2020/03/30

1.  > 模块化

    -   requirejs, commonjs, seajs 的区别
    -   es6 的模块化操作
    -   node 6.0 不支持 es6 import/ export 所以需要 babel，但如果只需要这个也可以使用轻量级的 rollup

2.  > 命令行程序

    在 Windows 系统下的做法完全不同，我们得靠.cmd 文件来解决问题。假设 node-echo.js 存放在 C:\Users\user\bin 目录，并且该目录已经添加到 PATH 环境变量里了。接下来需要在该目录下新建一个名为 node-echo.cmd 的文件，文件内容如下：
    `@node "C:\User\user\bin\node-echo.js" %\*`
    这样处理后，我们就可以在任何目录下使用 node-echo 命令了。

3.  > 工程目录

-   /home/user/workspace/node-echo/ # 工程目录
    -   bin/ # 存放命令行相关代码
        -   node-echo
    -   doc/ # 存放文档
    -   lib/ # 存放 API 相关代码
        -   echo.js
    -   node_modules/ # 存放三方包
        -   argv/
    -   tests/ # 存放测试用例
    -   package.json # 元数据文件
    -   README.md # 说明文件
