// npm init
// npm install mongoose 

const mongoose = require('mongoose')
// var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/test')


const Cat = mongoose.model('Cat', { name: String })

const kitty = new Cat({ name: 'Zildjian' })
kitty.save().then(() => console.log('meow'))