module.exports = function (app) {
    app.get('/router', function (req, res) {
        res.send('wa wu，通过routers进来了')
    })
}

