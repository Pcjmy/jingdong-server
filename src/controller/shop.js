const Shop = require('../models/Shop')

async function getHotList() {
  const list = await Shop.find().sort({ _id: -1 }) // 逆序
  return list
}

async function getShopInfo(id) {
  const shop = await Shop.findById(id)
  return shop
}

module.exports = {
  getHotList,
  getShopInfo
}
