const Address = require('../models/Address')

async function createAddress(username, data) {
  const address = await Address.create({
    username,
    ...data
  })
  return address
}

async function getAddressList(username) {
  const list = await Address.find({ username }).sort({ updatedAt: -1 }) // 按更新时间倒序
  return list
}

async function getAddressById(id) {
  const address = Address.findById(id)
  return address
}

module.exports = {
  createAddress,
  getAddressList,
  getAddressById
}