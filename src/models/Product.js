const mongoose = require('../db/db')

const Schema = mongoose.Schema({
  shopId: {
    type: String,
    require: true
  },
  name: String,
  imgUrl: String,
  sales: Number,
  price: Number,
  oldPrice: Number,
  tabs: [String]
}, { timestamps: true })

const Product = mongoose.Model('product', Schema)

module.exports = Product
