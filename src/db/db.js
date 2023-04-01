// mongoose 连接数据库

const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017'
const dbName = 'jingdong'

mongoose.connect(`${url}/${dbName}`)
  .then(() => console.log('Connected!'))

module.exports = mongoose
