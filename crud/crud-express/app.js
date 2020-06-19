let express = require('express')
let app = express()

app.get('/', (res, req) => {
    console.log('good');
    res.send(121)
})

app.listen(3000, () => {
    console.log('app is running at http://localhost:3000');
})