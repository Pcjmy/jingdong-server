import mongoose from '../db/db'

const Schema = mongoose.Schema({
  name: String,
  imgUrl: String,
  sales: Number,
  expressLimit: {
    type: Number,
    default: 0
  },
  expressPrice: Number,
  slogan: String
}, { timestamps: true} )

const Shop = mongoose.Model('shop', Schema)

module.exports = Shop
