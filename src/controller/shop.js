const Shop = require('../models/Shop')
const Product = require('../models/Product')

async function getHotList() {
  const list = await Shop.find().sort({ _id: -1 }) // 逆序
  return list
}

async function getShopInfo(id) {
  const shop = await Shop.findById(id)
  return shop
}

async function getProductsByShopId(id, tab = 'all') {
  const list = await Product.find({
    shopId: id,
    tabs: {
      $in: tab // 匹配 tabs
    }
  }).sort({ _id: -1 }) // 逆序
  return list
}

module.exports = {
  getHotList,
  getShopInfo,
  getProductsByShopId
}
