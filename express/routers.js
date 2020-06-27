var express = require('express')

// 1. 创建路由容器
var router = express.Router()

// 2. 把路由挂载到router路由容器上
router.get('/express-router', function (req, res) {
    res.send('wa wu通过express的router进来了')
})


// 3. 把router导出去

module.exports = router