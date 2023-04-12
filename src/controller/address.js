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

async function updateAddress(id, username, data) {
  const address = await Address.findOneAndUpdate(
      { _id: id, username }, // 查询条件
      { username, ...data }, // 要更新的数据，别忘了 username
      { new: true } // 返回更新之后的最新数据，默认是 false 返回更新之前的数据
  )
  return address
}

module.exports = {
  createAddress,
  getAddressList,
  getAddressById,
  updateAddress
}