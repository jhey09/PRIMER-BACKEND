const mongoose = require('mongoose')
require('dotenv').config()

const url = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.${process.env.MONGO_ID}.mongodb.net/?retryWrites=true&w=majority`
console.log(url)
mongoose.connect(url)
.then((res) => console.log('conectado'))

module.exports = mongoose