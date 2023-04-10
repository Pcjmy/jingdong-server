const Address = require('../models/Address')

async function createAddress(username, data) {
  const address = await Address.create({
    username,
    ...data
  })
  return address
}

module.exports = {
  createAddress
}